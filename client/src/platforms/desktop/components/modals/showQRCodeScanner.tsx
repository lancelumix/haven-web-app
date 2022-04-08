import * as React from "react";
import { Modal } from "shared/components/modal";
import QrCodeScanner from "../../../../shared/components/qrCodeScanner/index.js";
import { HavenAppState } from "platforms/desktop/reducers/index.js";
import { connect } from "react-redux";
import { hideModal } from "shared/actions/modal";

class ShowQRCodeScannerModal extends React.Component<any, any> {
  
  
  render() {
    // const { addresses, selected } = this.props;

    return (
      <Modal
        title="Scan QR Code"
        description={`Scan recipient's address`}
        leftButton="Cancel"
        rightButton="Finish"
        isLoading={false}
        disabledRight={true}
        disabledLeft={true}
        onConfirm={() => this.onCancel()}
        onCancel={() => this.onCancel()}
      >
        <QrCodeScanner />
      </Modal>
    );
  }

  onCancel() {
    this.props.hideModal();
  }
}

const mapStateToProps = (state: HavenAppState) => ({
  // selected: state.address.selected,
  // addresses: state.address.entrys,
});

export const QRCodeScannerModal = connect(mapStateToProps, { hideModal })(
  ShowQRCodeScannerModal
);

import {
    GET_BLOCK_HEADER_EXCHANGE_RATE_SUCCEED
} from "platforms/desktop/actions/types";
import {BlockHeaderRate} from "shared/reducers/blockHeaderExchangeRates";
import {AnyAction} from "redux";
import bigInt from "big-integer";


const HAVEN_STATS_URL = 'https://network-api.havenprotocol.org/api-stagenet/info';

// fetch prices from oracle for web to be consistent with desktop app -> will be replaced later by 'real' blockheader entries
export const getExchangeRates = () => {
    return (dispatch: any) => {
        fetch(HAVEN_STATS_URL)
            .then((res: any) => createRecordEntry(res))
            .then((priceEntry: BlockHeaderRate) =>
                dispatch(getLastBlockerHeaderSucceed(priceEntry))
            )
            .catch((err: any) => console.log(err));
    };
};

const createRecordEntry = (rawBlockHeaderData: any): BlockHeaderRate => {
    const blockHeader = rawBlockHeaderData.block_header;
    const blockHeight: number = blockHeader.height + 1;
    Object.entries(blockHeader.pricing_record).forEach(([key, value]) => {
        if (key !== "signature") {
            blockHeader.pricing_record[key] = bigInt(value as number);
        }
    });
    const priceRecord = blockHeader.pricing_record;
    priceRecord.height = blockHeight;
    priceRecord.timestamp = blockHeader.timestamp;
    return priceRecord;
};

export const getLastBlockerHeaderSucceed = (
    priceRecord: BlockHeaderRate
): AnyAction => {
    return { type: GET_BLOCK_HEADER_EXCHANGE_RATE_SUCCEED, payload: priceRecord };
};

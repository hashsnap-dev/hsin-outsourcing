import { MapFoodMatsToMats } from "hsin";
import {
  syncForeignFoodList,
  syncForeignFoodDetail,
} from "../lib/crawl-foreign-food";
import {
  syncC003,
  syncFunctionalMaterials,
  syncI0030,
  syncI2715,
  syncI2810,
  syncIntegrationFoodList,
} from "../lib/foodsafety-api";
import { getCollection, init, mongoInited } from "../lib/mongodb";
import {
  getXlsx,
  parseMatsDetails,
  syncEatTogether,
  syncMats,
  syncMatsDescription,
  syncMatsToEatTogether,
  syncStopSelling,
} from "../lib/xlsx";
init(); 
const main = async () => {
  await mongoInited.promise;
  await syncStopSelling();
  await syncI2715();
  // await syncI2810();
  process.exit();
};

main();

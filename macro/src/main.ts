import {
  getFoodDetailHTML,
  getFoodList,
  parseFoodDetailHTML,
  syncFoodDetail,
  syncFoodDetailsByFoodList,
  syncFoodList,
} from "../lib/crawl-domestic-food";
import {
  getC003,
  getI0030,
  getI2790,
  syncC003,
  syncFunctionalMaterials,
  syncI0030,
  syncI0040,
  syncI2790,
  syncIntegrationFoodList,
} from "../lib/foodsafety-api";
import {
  ignoreError,
  parenthesisParse,
  ParenthesisPosition,
  toUnique,
} from "../lib/helper";
import {
  checkDupReportNo,
  extraEatTogether,
  fixIntegrationFoodList,
  getAllCrawlMaterials,
  getAllMaterials,
  getCollection,
  init,
  mongoInited,
  setMapFoodMatsToMats,
  syncIntegrationFoodListText,
  syncMatsCreatedDate,
  syncNutrientFunctionalities,
  syncThumbnails,
  syncWarnToFood,
} from "../lib/mongodb";
import {
  CrawlMaterials,
  DomesticFoodDetail,
  DomesticFoodList,
  FunctionalityMaterials,
  MapFoodMatsToMats,
  I0030,
  ProcessedMaterials,
  Functionalities,
  IntegrationFoodList,
  FoodRawMaterials,
  ForeignFoodDetail,
} from "hsin";

import {promises as fs} from "fs";
import {
  readMaterialMeta,
  getXlsx,
  parseMatsDetails,
  syncMats,
  MaterialMeta,
  preprocessMapFMatsToMats,
  syncMapFMatsToMats,
  syncMatByFiles,
  syncFunctionalitiesByXlsx,
  saveForeignFoodFunctionalityMaterialList,
  getForeignFoodFunctionalityMaterialList,
  syncFunctionalityMaterials2,
  syncFalseAdvertising,
  syncMatWarnIcons,
  checkPP,
  syncEatTogether,
  syncMatsToEatTogether,
  syncMatsDescription,
  syncStopSelling,
  syncWarn,
  syncFunctionalityDetail,
  syncFunctionalMaterialsUnit,
} from "../lib/xlsx";
import {
  getMaterialsList,
  syncMaterialList,
  syncMaterialsListParse,
} from "../lib/crawl-materials";
import {
  syncForeignFoodDetail,
  syncForeignFoodList,
} from "../lib/crawl-foreign-food";
import {
  getForeignBlockFood,
  getForeignReturnFoodList,
  syncForeignBlockFood,
  syncForeignReturnFood,
} from "../lib/crawl-foreign-bad-food";
import {getAllPostList, syncPostList} from "../lib/crawl-post-naver";
import {syncFunctionalityMaterialDescription} from "../lib/xlsx-populate";
import {syncPhotoUploader} from "../lib/sync-photo-uploader";
/*

* ?????? ????????? ?????? ????????????
await syncC003(); // * ?????? ????????? ???????????? ??????
await syncI0030(); // * ?????? ????????? ??????????????????(?????????) ??????
await syncFunctionalMaterials() // * I0030 ???????????? ??????????????? ?????? ??? _domestic-food-materials??? ??????
setMapFoodMatsToMats(); // * ???????????? ??????????????? ?????? ?????? ?????? ????????? ??????
const mfm = getCollection<MapFoodMatsToMats>('_map-foodMats-to-mats');
console.log(mfm.find({no: {$size: 0}}).toArray()); // * ???????????? ?????? ???????????? ?????? ??? ???????????? ???

* _domestic-food-materials??? ???????????? ???????????? ????????? ??????
const mats = await getAllMaterials(); 
await fs.writeFile('./fmatname.txt', mats.join('\n'));


* ?????? ????????? ?????? ????????????
await syncForeignFoodList(); // * ?????? ????????? ????????? ??????
await syncForeignFoodDetail(); // * ?????? ????????? ????????? ???????????? ??????
* ?????? ??????????????? ??????
await getForeignFoodFunctionalityMaterialList(); // *?????? ??????????????? ????????? ?????? ??? ????????? ??????????????? ??????
await saveForeignFoodFunctionalityMaterialList(); // *?????? ??????????????? ????????? ??????
await syncMapFMatsToMatsByForeign(); // *?????????????????? ???????????? ?????? ??? ??????
 
* ????????? ????????? ?????? ?????? ??? ?????? ??????
await syncIntegrationFoodList();

* ?????? ?????????
await syncMaterialList(); // * ?????? ????????? ??? ????????? _crawl-materials
fs.writeFile('./test.txt', [...new Set(await getAllCrawlMaterials())].sort().join('\n')); // * ?????? ????????? ??? ?????? ????????? ??????
syncMaterialsListParse // * ?????? ?????? ??? ?????????
exportMaterialsListParseToXlsx // * ?????? ?????? ????????? ?????? -> ????????? ???????????? ??????

* ?????? ?????? ????????? ?????????
await syncFunctionalityMaterials2()

* ????????? ?????????
await syncFunctionalitiesByXlsx(); // * ????????? ????????? ?????????

* ???????????? ?????? ?????? ?????????
await syncForeignBlockFood();

* ???????????? ?????? ???????????? ?????????
await syncForeignReturnFood();

* ?????????????????? ?????? ?????????, ????????? ??????
await syncFalseAdvertising();

*/

init();

const main = async () => {
  try {
    await mongoInited.promise;

    // await saveForeignFoodFunctionalityMaterialList();

    // await syncMatByFiles();
    // await syncMapFMatsToMats(); // * ????????? ?????? ?????? ??????
    // const mfm = getCollection<MapFoodMatsToMats>('_map-foodMats-to-mats');
    // console.log(await mfm.find({no: {$size: 0}}).toArray());

    // ????????? ????????? ?????????
    // await syncPostList();

    // ????????? ???????????? ?????????
    // await syncMatWarnIcons(); // * ????????? ???????????? ?????? ?????????
    // await syncWarn();
    // await syncMatWarnIcons();
    // await checkPP();

    // await syncWarnToFood(); // * ????????? ???????????? ???????????? ?????????
    // await syncThumbnails(); // ????????? ?????????

    // await syncStopSelling(); // * ???????????? ?????????

    // console.log(await getMaterialsList(1));

    // await fixIntegrationFoodList()
    // console.log(await getFoodList(1).json());
    // console.log(await (await getFoodDetailHTML('20040020071414')).body);

    //
    // await syncNutrientFunctionalities();

    // console.log(await getI2790(1, 1000))

    // await syncFunctionalityDetail();

    // await syncIntegrationFoodListText(); // ????????? ???????????? ????????? / ????????????

    // await syncMatsCreatedDate();
    // await checkDupReportNo();

    // await syncFunctionalMaterialsUnit();

    // ????????????
    // const fm = getCollection<FunctionalityMaterials>('_functionality-materials');
    // for (const item of await fm.find({}).toArray()) {
    //   if (!item.created_date) await fm.updateOne({_id: (item as any)._id}, {$set: {created_date: new Date('2021-03-01')}});
    // }

    // const fm = getCollection<FunctionalityMaterials>('_functionality-materials');
    // await syncFunctionalityMaterialDescription();
    // await checkPP();
    // await syncPhotoUploader();
    process.exit();
  } catch (error: any) {
    throw new Error(error);
  }
};
main();

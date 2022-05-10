import { MapFoodMatsToMats } from "hsin";
import { syncForeignFoodList, syncForeignFoodDetail } from "../lib/crawl-foreign-food";
import { syncC003, syncFunctionalMaterials, syncI0030, syncIntegrationFoodList } from "../lib/foodsafety-api";
import { getCollection, init, mongoInited, syncThumbnails } from "../lib/mongodb";
import { syncEatTogether, syncMatsToEatTogether } from "../lib/xlsx";
init()
const  main = async () => {
    await mongoInited.promise;
    await syncThumbnails();
   
    process.exit();
}

main(); 
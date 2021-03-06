interface BoardItem {
  views?: number;
  heart?: number;
}

export interface IntegrationFoodList extends BoardItem {
  type: "domestic" | "foreign";
  report_no: string;
  name: string;
  company: string;
  materials: string[];
  materialNames: string[];
  functionalities: string[];
  warn: string[];
  thumbnail: string;
  thumbnails?: string[];
  text?: string;
  created_date?: Date;
  hidden: boolean;
}

export interface DomesticFoodList {
  prdlst_report_ledg_no: string;
  prdlst_nm: string;
  prms_dt: string;
  prdlst_report_no: string;
  bssh_nm: string;
  total_count: string;
  no: string;
  view?: number;
}

export interface DomesticFoodDetail {
  maker: string;
  food_name: string;
  report_number: string;
  registration_date: string;
  expiration: string;
  properties: string;
  how_to_eat: string;
  package: string;
  storage_precautions: string;
  ingestion_precautions: string;
  functionality: string;
  standard: string;
  prdlst_report_no: string;
}

export interface I0030 {
  NTK_MTHD: string;
  PRDLST_NM: string;
  RAWMTRL_NM: string;
  PRMS_DT: string;
  POG_DAYCNT: string;
  PRDLST_REPORT_NO: string;
  PRIMARY_FNCLTY: string;
  PRODUCTION: string;
  CSTDY_MTHD: string;
  HIENG_LNTRT_DVS_NM: string;
  BSSH_NM: string;
  LCNS_NO: string;
  FRMLC_MTRQLT: string;
  LAST_UPDT_DTM: string;
  IFTKN_ATNT_MATR_CN: string;
  STDR_STND: string;
  INDUTY_CD_NM: string;
  CHILD_CRTFC_YN: string;
  DISPOS: string;
  PRDT_SHAP_CD_NM: string;
  PRDLST_CDNM: string;
}
export interface C003 {
  NTK_MTHD: string;
  PRDLST_NM: string;
  RAWMTRL_NM: string;
  PRMS_DT: string;
  CRET_DTM: string;
  POG_DAYCNT: string;
  PRDLST_REPORT_NO: string;
  PRIMARY_FNCLTY: string;
  CSTDY_MTHD: string;
  BSSH_NM: string;
  LAST_UPDT_DTM: string;
  LCNS_NO: string;
  IFTKN_ATNT_MATR_CN: string;
  STDR_STND: string;
  DISPOS: string;
  SHAP: string;
}

export interface I2790 {
  NUTR_CONT8: string;
  NUTR_CONT9: string;
  NUTR_CONT4: string;
  NUTR_CONT5: string;
  NUTR_CONT6: string;
  NUM: string;
  NUTR_CONT7: string;
  NUTR_CONT1: string;
  NUTR_CONT2: string;
  SUB_REF_NAME: string;
  NUTR_CONT3: string;
  RESEARCH_YEAR: string;
  MAKER_NAME: string;
  GROUP_NAME: string;
  SERVING_SIZE: string;
  SAMPLING_REGION_NAME: string;
  SAMPLING_MONTH_CD: string;
  SAMPLING_MONTH_NAME: string;
  DESC_KOR: string;
  SAMPLING_REGION_CD: string;
  FOOD_CD: string;
}
export interface I2715 {
  PRDT_NM: string;
  MUFC_NM: string;
  MUFC_CNTRY_NM: string;
  INGR_NM_LST: string;
  STT_YMD: string;
  END_YMD: string;
  CRET_DTM: string;
  LAST_UPDT_DTM: string;
  IMAGE_URL: string;
  SELF_IMPORT_SEQ: string;
  BARCD_CTN: string;
}
export interface I2810 {
  TITL: string;
  DETECT_TITL: string;
  CRET_DTM: string;
  BDT: string;
  DOWNLOAD_URL: string;
  NTCTXT_NO: string;
}
export interface FoodRawMaterials {
  type: "domestic" | "foreign";
  report_number: string;
  materials: string[];
}
export type TextItem = {
  value: string;
  superscript: boolean;
};
export interface FunctionalityMaterials extends BoardItem {
  no: string[];
  name: string;
  type: string;
  company: string;
  functionality: string[];
  amount: string;
  warn: string[];
  abolished: boolean;
  canceled: boolean;
  eatTogether: string;
  description: string | TextItem[];
  requirements: string;
  text?: string;
  created_date?: Date;
  unit?: string;
}

export interface CrawlMaterials {
  ans_yn: string;
  atch_file_no: string;
  atch_file_posbl_yn: string;
  bbs_nm: string;
  bbs_no: string;
  bbs_templet_nm: string;
  bbs_templet_url: string;
  bbs_type_cd: string;
  bdt: string;
  boardList: string[];
  board_code: string;
  board_file_down: string;
  clmn01: string;
  clmn02: string;
  clmn03: string;
  clmn04: string;
  clmn05: string;
  clmn06: string;
  clmn07: string;
  clmn08: string;
  cmt_no: string;
  cmt_yn: string;
  cn: string;
  cret_dtm: string;
  cret_end_dtm: string;
  cret_start_dtm: string;
  cretr_id: string;
  cretr_nickname: string;
  cretr_nm: string;
  ctgry_col_nm: string;
  ctgry_no: string;
  ctgry_type_cd: string;
  ctgrynm: string;
  del_yn: string;
  depth_titl: string;
  ecm_file_no: string;
  faq_inquiry_content: string;
  fileList: string[];
  file_mg: string;
  file_path: string;
  file_type_cd: string;
  file_yn: string;
  flag: string;
  front_exps_yn: string;
  head_info: string;
  hrnk_cretr_id: string;
  hrnk_ctgryno: string;
  hrnk_menu_no: string;
  hrnk_ntctxt_no: string;
  img_link_url: string;
  img_ori: string;
  inqry_cnd_use_yn: string;
  inqry_cnt: string;
  issue_occrnc_yn: string;
  keyword: string;
  kword_use_yn: string;
  last_updt_dtm: string;
  last_updtr_id: string;
  list_img: string;
  list_img_link_yn: string;
  list_img_use_yn: string;
  logic_file_nm: string;
  menu_grp_cd: string;
  menu_nm: string;
  menu_no: string;
  meta_cd: string;
  meta_dvs: string;
  meta_use_yn: string;
  mxmm_file_size: string;
  natn_cd: string;
  natn_cd_use_yn: string;
  natn_nm: string;
  new_flag: string;
  no: string;
  ntctxt_no: string;
  nticmatr_yn: string;
  openType: string;
  order_type: string;
  ordtm_ntic_yn: string;
  orgnl_sorcnm: string;
  orgnl_url: string;
  orgnl_view_use_yn: string;
  ori_file_nm: string;
  outpt_hg: string;
  outpt_type_cd: string;
  outpt_wdt: string;
  perm_extnm: string;
  physic_file_nm: string;
  post_ntctxt_no: string;
  pre_ntctxt_no: string;
  rm: string;
  rprsnt_img_file_no: string;
  rprsnt_img_nm: string;
  rprsnt_img_yn: string;
  rtrvl_cnt: string;
  search_keyword: string;
  search_type: string;
  show_cnt: string;
  start_idx: string;
  sys_dvs_cd: string;
  tab_pdcnt: string;
  tab_use_yn: string;
  tag_info: string;
  tag_use_yn: string;
  titl: string;
  total_cnt: string;
  user_txt_del_yn: string;
  user_txt_lock_yn: string;
  user_txt_write_yn: string;
  view_img: string;
}

export interface ForeignFoodList {
  rcno: string;
  bsnOfcName: string;
  prductKoreanNm: string;
  prductNm: string;
  ovsmnfstNm: string;
  procsDtm: string;
  mnfNtnnm: string;
  xportNtnnm: string;
}

export interface MapFoodMatNameToFunctionalityMatName {
  type: "target" | "search";
  foodMatName: string;
  functionalityMatName: string;
}

export interface ForeignFoodDetail {
  rcno: string;
  rtrvldsuseList: [];
  foodHistInfo: {
    histNo: string;
    histCnt: number;
    histList: [];
  };
  itmList: {
    sn: number;
    itmCd: string;
    itmNm: string;
  }[];
  irdntList: {
    koreanNm: string;
    rcno: string;
    irdntCd: string;
    sn: number;
    engNm: string;
  }[];
  refrigcnvrsList: [];
  foodDetailInfo: {
    rpsntItmNm: string;
    ovsmnfstCd: string;
    prductKoreanNm: string;
    ovsmnfstNm: string;
    expirdeBeginDtm: string | null;
    ovsmnfstAddr: string;
    rcno: string;
    jdgmntManagtSeCd: string;
    xportNtncd: string;
    ceimdecDtm: string;
    prcssEndDtm: string;
    ovsmnfstAreaNm: null;
    prductNm: string;
    expirdeEndDtm: string | null;
    rpsntItmCd: string;
    dclPrductSeNm: string;
    impOwrLcsno: string;
    xportNtnnm: string;
    dclPrductSeCd: string;
    mnfNtncd: string;
    procsDtm: string;
    impdclProgrsSttusCd: string;
    ovsmnfstCmpnyNm: string;
    mnfNtnnm: string;
  };
}

export interface MapFoodMatsToMats {
  nameInFood: string;
  no: string[];
}

export interface Functionalities extends BoardItem {
  type: "??????????????????????????????" | "????????? ??????" | "??????????????????";
  id: string;
  functionality: string;
  materials?: string[];
  content?: [string, string][];
}

export interface ProcessedMaterials {
  ntctxt_no: string; // ??????????????? ?????? ?????? ?????????
  no: string[];
  type:
    | "???????????????-?????????"
    | "???????????????-???????????????"
    | "??????????????????"
    | "??????????????????";
  titl: string;
  company: string;
  abolished: boolean;
  canceled: boolean;
}

export interface I0040 {
  PRMS_DT: string;
  BSSH_NM: string;
  APLC_RAWMTRL_NM: string;
  HF_FNCLTY_MTRAL_RCOGN_NO: string;
  INDUTY_NM: string;
  IFTKN_ATNT_MATR_CN: string;
  ADDR: string;
  FNCLTY_CN: string;
  DAY_INTK_CN: string;
}

export interface ForeignBlockFoodList {
  fileName: string; // ?????? ??????
  fileExt: string; // ?????? ?????????
  registDtm: number; // ????????? now
  iemCtntNm3: string; // ?????? ??????
  iemCtntNm1: string; // ????????????
  iemCtntNm2: string; // ????????????
  servFilePath: string; // ????????? ??????
  registDtmYmd: string; // ????????? ??????
  iemCtnt2: string; // ????????????
  iemCtnt1: string; // ????????????
  cntntsSj: string; // ?????? ??????
  cntntsSn: number; // ???????????? ?????????
  imageIncode: string; // ????????? ??????
}
export interface ForeignReturnFoodList {
  fileName: string; // ????????????
  fileExt: string; // ?????????
  iemCtntNm7: string; // ?????? ??????
  iemCtntNm8: string; // ????????????.. ????????????????
  registDtm: number; // ???????????? now
  iemCtntNm5: string; // ????????????
  iemCtntNm6: string; // ?????? ??????
  iemCtntNm3: string; // ????????????
  iemCtntNm1: "??????????????????"; // ????????????
  iemCtntNm2: string; // ?????????
  servFilePath: string; // ????????? ??????
  iemCtntNm12: string; // ????????????
  iemCtntNm13: string; // ????????????
  iemCtntNm15: string; // ????????????
  registDtmYmd: string; // ????????????
  iemCtntNm16: string; // ????????????
  iemCtnt9: string; // ??????????????????
  iemCtnt8: string; // ????????????, ????????????????
  iemCtntNm10: string; // ???????????????
  iemCtntNm11: string; // ????????? ??????
  iemCtnt11: string; // ????????? ??????
  iemCtnt12: string; // ????????????
  iemCtnt17: string; // ?????? ??????
  iemCtnt15: string; // ????????????
  iemCtnt16: string; // ????????????
  iemCtnt7: string; // ????????????
  iemCtnt6: string; // ????????????
  iemCtnt5: string; // ????????????
  iemCtnt3: string; // ????????????
  iemCtnt2: string; // ?????? ?????????
  iemCtnt10: string; // ????????? ??????
  cntntsSj: string; // ?????????
  wrterNm: string; // ????????????
  cntntsSn: number; // ???????????? ??????
  imageIncode: string; // ????????? ??????
  updtDtm: number; // ???????????? ?????? now
}

export interface FalseAdvertising {
  thumbnail: string;
  category: string;
  title: string;
  violation_category: string;
  violation_contents: string;
  media: string;
  phrase: string;
  result: string;
}

export interface NaverPosts {
  href: string;
  url: string;
  volumeNo: string;
  memberNo: string;
  seriesNo: string;
  seriesName: string;
  tags: string[];
  title: string;
  body: string;
}

export interface EatTogether {
  name: string;
  name_eng: string;
  thumbnail: string;
  descriptions: {
    title?: string;
    body: string;
    medicines: {
      ingredient: string;
      names: string;
      category: string;
      specialized: boolean;
      type: string;
    }[];
  }[];
  query?: string;
}

export interface StopSelling {
  id: number;
  name: string;
  company: string;
  level: string;
  reason: string;
  expirationDate: string;
  registrationNumber: string;
  address: string;
  barcode: string;
  unit: string;
  howToRespond: string;
  details: string;
  thumbnails: string[];
}

export interface FoodWarn {
  id: number;
  icon: string;
  description: string;
}

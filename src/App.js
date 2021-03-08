import React, { lazy, Suspense, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { hot } from "react-hot-loader";
import "../scss/App.scss";
import { getCategories } from "./libs/api";
import ThemeContext from "./context/itemsContext";
import CartContext from "./context/itemsContext";

const Home = lazy(() => import(/* webpackPrefetch: true */ "./pages/home"));
const Detail = lazy(() => import(/* webpackPrefetch: true */ "./pages/detail"));
const Search = lazy(() =>
  import(/* webpackPrefetch: true */ "./pages/searchResult")
);
const Categories = lazy(() =>
  import(/* webpackPrefetch: true */ "./pages/categories")
);
const BacktoTop = lazy(() =>
  import(/* webpackPrefetch: true */ "./components/backtotop")
);
const Header = lazy(() => import(/* webpackPrefetch: true */ "./pages/header"));
const Footer = lazy(() => import(/* webpackPrefetch: true */ "./pages/footer"));
function App({ items, initCart = {} }) {
  let getCat = getCategories();
  let datos = [
    {
      IItemID: 1659,
      SItemCode: "78481",
      SItemDesc: "BRONC. H.T. TAN. OIL SPRAY FPS4 200ML",
      ItemExt: {
        Group: {
          IGroupID: 260,
          SGroupCode: "100020050 ",
          SGroupDesc: "PROTECTORES SOLAR",
        },
      },
      Category: {
        ICategoryID: 4,
        SCategoryCode: "100",
        SCategoryDesc: "CUIDADO PERSONAL",
        LsGroup: null,
      },
      SItemName: "Aceite bronceador en sprite FPS4",
      SItemMark: "Hawaian Tropic",
      ItemMeasure: "240 mL",
      DPrice: 248.0,
      SPahtImage:
        "https://www.royalresorts.com/wp-content/uploads/2019/market/BRONC-H-T-TANNING-OIL-SPRAY-FPS4-200ML.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 0,
      MinSell: 1,
    },
    {
      IItemID: 19858,
      SItemCode: "215682",
      SItemDesc: "BRONC. B.BOAT TAN. OIL SPRAY FPS4 236ML",
      ItemExt: {
        Group: {
          IGroupID: 260,
          SGroupCode: "100020050 ",
          SGroupDesc: "PROTECTORES SOLAR",
        },
      },
      Category: {
        ICategoryID: 4,
        SCategoryCode: "100",
        SCategoryDesc: "CUIDADO PERSONAL",
        LsGroup: null,
      },
      SItemName: "Aceite bronceador FPS4",
      SItemMark: "Banana Boat",
      ItemMeasure: "236 mL",
      DPrice: 205.0,
      SPahtImage:
        "https://www.royalresorts.com/wp-content/uploads/2019/market/BRONC-B-BOAT-TAN-OIL-SPRAY-FPS4-236ML.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 1,
      MinSell: 1,
    },
    {
      IItemID: 2252,
      SItemCode: "119103",
      SItemDesc: "BRONC. H.T. TAN. OIL SPRAY FPS15 200ML",
      ItemExt: {
        Group: {
          IGroupID: 260,
          SGroupCode: "100020050 ",
          SGroupDesc: "PROTECTORES SOLAR",
        },
      },
      Category: {
        ICategoryID: 4,
        SCategoryCode: "100",
        SCategoryDesc: "CUIDADO PERSONAL",
        LsGroup: null,
      },
      SItemName: "Aceite bronceador SPF15",
      SItemMark: "Hawaiian Tropic",
      ItemMeasure: "240 mL",
      DPrice: 248.0,
      SPahtImage:
        "https://royalresorts.com/wp-content/uploads/2016/market/hawaiian-tropic-oil-15.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 2,
      MinSell: 1,
    },
    {
      IItemID: 3886,
      SItemCode: "188033",
      SItemDesc: "ACEITE OLIVA F.BERIO E.V. ORGANICO 250ML",
      ItemExt: {
        Group: {
          IGroupID: 605,
          SGroupCode: "060060    ",
          SGroupDesc: "PRODUCTOS SALUDABLES",
        },
      },
      Category: {
        ICategoryID: 76,
        SCategoryCode: "0060",
        SCategoryDesc: "PRODUCTOS SALUDABLES",
        LsGroup: null,
      },
      SItemName: "Aceite de oliva",
      SItemMark: "Filipo Berio",
      ItemMeasure: "250 ML",
      DPrice: 139.0,
      SPahtImage:
        "https://royalresorts.com/wp-content/uploads/2016/market/Berio-EXTRA-VIRGINORGANICOLIVEOIL.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 4,
      MinSell: 1,
    },
    {
      IItemID: 3394,
      SItemCode: "177562",
      SItemDesc: "ACEITE OLIVA EXTRA VIRGEN F.BERIO 250ML",
      ItemExt: {
        Group: {
          IGroupID: 102,
          SGroupCode: "60060     ",
          SGroupDesc: "ABARROTES",
        },
      },
      Category: {
        ICategoryID: 27,
        SCategoryCode: "060",
        SCategoryDesc: "ABARROTES",
        LsGroup: null,
      },
      SItemName: "Aceite de oliva extra virgen",
      SItemMark: "Filippo Berio",
      ItemMeasure: "250 ML",
      DPrice: 85.0,
      SPahtImage:
        "https://royalresorts.com/wp-content/uploads/2017/market/aceiteolivaextravirgen.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 29,
      MinSell: 1,
    },
    {
      IItemID: 7891,
      SItemCode: "196345",
      SItemDesc: "ACEITE FILIPPO BERIO 100 PURO 250ML",
      ItemExt: {
        Group: {
          IGroupID: 102,
          SGroupCode: "60060     ",
          SGroupDesc: "ABARROTES",
        },
      },
      Category: {
        ICategoryID: 27,
        SCategoryCode: "060",
        SCategoryDesc: "ABARROTES",
        LsGroup: null,
      },
      SItemName: "Aceite de oliva puro",
      SItemMark: "Filippo Berio",
      ItemMeasure: "250 ML",
      DPrice: 79.0,
      SPahtImage:
        "https://royalresorts.com/wp-content/uploads/2017/market/aceitefilippoberio.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 7,
      MinSell: 1,
    },
    {
      IItemID: 9148,
      SItemCode: "199186",
      SItemDesc: "ACEITE NUTRIOLI PURO DE SOYA 400ML",
      ItemExt: {
        Group: {
          IGroupID: 102,
          SGroupCode: "60060     ",
          SGroupDesc: "ABARROTES",
        },
      },
      Category: {
        ICategoryID: 27,
        SCategoryCode: "060",
        SCategoryDesc: "ABARROTES",
        LsGroup: null,
      },
      SItemName: "Aceite de soya",
      SItemMark: "Nutrioli",
      ItemMeasure: "473 ML",
      DPrice: 30.0,
      SPahtImage:
        "https://www.royalresorts.com/wp-content/uploads/2017/market/AceiteNutrioliPuroDeSoya.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 5,
      MinSell: 1,
    },
    {
      IItemID: 3183,
      SItemCode: "186138",
      SItemDesc: "H.T.FP30 CARROT CONTINUOS SPRAY 180ML",
      ItemExt: {
        Group: {
          IGroupID: 260,
          SGroupCode: "100020050 ",
          SGroupDesc: "PROTECTORES SOLAR",
        },
      },
      Category: {
        ICategoryID: 4,
        SCategoryCode: "100",
        SCategoryDesc: "CUIDADO PERSONAL",
        LsGroup: null,
      },
      SItemName: "Aceite de zanahoria protectora FPS30",
      SItemMark: "Hawaian Tropic",
      ItemMeasure: "180 mL",
      DPrice: 355.0,
      SPahtImage:
        "https://www.royalresorts.com/wp-content/uploads/2019/market/H-T-FP30-CARROT-CONTINUOS-SPRAY-180M.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 1,
      MinSell: 1,
    },
    {
      IItemID: 71,
      SItemCode: "126253",
      SItemDesc: "ACEITE SPAM ORIGINAL 170GRS",
      ItemExt: {
        Group: {
          IGroupID: 102,
          SGroupCode: "60060     ",
          SGroupDesc: "ABARROTES",
        },
      },
      Category: {
        ICategoryID: 27,
        SCategoryCode: "060",
        SCategoryDesc: "ABARROTES",
        LsGroup: null,
      },
      SItemName: "Aceite en spray",
      SItemMark: "Spam",
      ItemMeasure: "170 GR",
      DPrice: 85.0,
      SPahtImage:
        "https://royalresorts.com/wp-content/uploads/2017/market/AceiteSpamOriginal.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 34,
      MinSell: 1,
    },
    {
      IItemID: 35432,
      SItemCode: "237236",
      SItemDesc: "BRONC. B. BOAT TAN. OIL SPRAY FPS8 236ML",
      ItemExt: {
        Group: {
          IGroupID: 260,
          SGroupCode: "100020050 ",
          SGroupDesc: "PROTECTORES SOLAR",
        },
      },
      Category: {
        ICategoryID: 4,
        SCategoryCode: "100",
        SCategoryDesc: "CUIDADO PERSONAL",
        LsGroup: null,
      },
      SItemName: "Aceite óleo bronceador FPS8",
      SItemMark: "Banana Boat",
      ItemMeasure: "236 mL",
      DPrice: 205.0,
      SPahtImage:
        "https://www.royalresorts.com/wp-content/uploads/2019/market/BRONC-B-BOAT-TAN-OIL-SPRAY-FPS8-236ML.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 3,
      MinSell: 1,
    },
    {
      IItemID: 2463,
      SItemCode: "168940",
      SItemDesc: "ACEITUNA MAD. DESHUESADA 658GR BLACK P",
      ItemExt: {
        Group: {
          IGroupID: 102,
          SGroupCode: "60060     ",
          SGroupDesc: "ABARROTES",
        },
      },
      Category: {
        ICategoryID: 27,
        SCategoryCode: "060",
        SCategoryDesc: "ABARROTES",
        LsGroup: null,
      },
      SItemName: "Aceituna negra sin hueso",
      SItemMark: "Pearls",
      ItemMeasure: "658 GR",
      DPrice: 47.0,
      SPahtImage:
        "https://royalresorts.com/wp-content/uploads/2017/market/AceitunaMadDeshuesada.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 14,
      MinSell: 1,
    },
    {
      IItemID: 4063,
      SItemCode: "189047",
      SItemDesc: "ACEITUNA SERPIS S/H 240GRS FRASCO",
      ItemExt: {
        Group: {
          IGroupID: 102,
          SGroupCode: "60060     ",
          SGroupDesc: "ABARROTES",
        },
      },
      Category: {
        ICategoryID: 27,
        SCategoryCode: "060",
        SCategoryDesc: "ABARROTES",
        LsGroup: null,
      },
      SItemName: "Aceituna sin hueso",
      SItemMark: "Serpis",
      ItemMeasure: "240 GR",
      DPrice: 65.0,
      SPahtImage:
        "https://royalresorts.com/wp-content/uploads/2017/market/AceitunaSerpis.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 20,
      MinSell: 1,
    },
    {
      IItemID: 3875,
      SItemCode: "187955",
      SItemDesc: "ACEITUNAS C/ANCHOA SERPIS 300G",
      ItemExt: {
        Group: {
          IGroupID: 102,
          SGroupCode: "60060     ",
          SGroupDesc: "ABARROTES",
        },
      },
      Category: {
        ICategoryID: 27,
        SCategoryCode: "060",
        SCategoryDesc: "ABARROTES",
        LsGroup: null,
      },
      SItemName: "Aceitunas con anchoa",
      SItemMark: "Serpis",
      ItemMeasure: "300 GR",
      DPrice: 72.0,
      SPahtImage:
        "https://www.royalresorts.com/wp-content/uploads/2017/market/aceitunas-rellenas-de-anchoas-Serpis.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 2,
      MinSell: 1,
    },
    {
      IItemID: 1094,
      SItemCode: "75779",
      SItemDesc: "ADEREZO CESAR 237ML CLEMENTE JACQUES.",
      ItemExt: {
        Group: {
          IGroupID: 294,
          SGroupCode: "060290010 ",
          SGroupDesc: "ADEREZOS",
        },
      },
      Category: {
        ICategoryID: 27,
        SCategoryCode: "060",
        SCategoryDesc: "ABARROTES",
        LsGroup: null,
      },
      SItemName: "Aderezo cesar",
      SItemMark: "Clemente Jacques",
      ItemMeasure: "237 ML",
      DPrice: 35.0,
      SPahtImage:
        "https://royalresorts.com/wp-content/uploads/2017/market/AderezoCesarClemente.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 4,
      MinSell: 1,
    },
    {
      IItemID: 1093,
      SItemCode: "75777",
      SItemDesc: "ADEREZO ITALIANA 237ML NORM CLEM./JACQUE",
      ItemExt: {
        Group: {
          IGroupID: 294,
          SGroupCode: "060290010 ",
          SGroupDesc: "ADEREZOS",
        },
      },
      Category: {
        ICategoryID: 27,
        SCategoryCode: "060",
        SCategoryDesc: "ABARROTES",
        LsGroup: null,
      },
      SItemName: "Aderezo italiano",
      SItemMark: "Clemente Jacques",
      ItemMeasure: "237 ML",
      DPrice: 38.0,
      SPahtImage:
        "https://www.royalresorts.com/wp-content/uploads/2017/market/AderezoItalianoClemJacque.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 17,
      MinSell: 1,
    },
    {
      IItemID: 1107,
      SItemCode: "75806",
      SItemDesc: "ADEREZO MIL ISLAS 237ML CLEMENTE JACQUES",
      ItemExt: {
        Group: {
          IGroupID: 294,
          SGroupCode: "060290010 ",
          SGroupDesc: "ADEREZOS",
        },
      },
      Category: {
        ICategoryID: 27,
        SCategoryCode: "060",
        SCategoryDesc: "ABARROTES",
        LsGroup: null,
      },
      SItemName: "Aderezo mil islas",
      SItemMark: "Clemente Jacques",
      ItemMeasure: "237 ML",
      DPrice: 38.0,
      SPahtImage:
        "https://royalresorts.com/wp-content/uploads/2017/market/Aderezo-Mil-Islas-237Ml-Clemente-Jacques.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 7,
      MinSell: 1,
    },
    {
      IItemID: 2210,
      SItemCode: "118088",
      SItemDesc: "ADEREZO RANCH CLEMENTE JACQUES 237ML",
      ItemExt: {
        Group: {
          IGroupID: 294,
          SGroupCode: "060290010 ",
          SGroupDesc: "ADEREZOS",
        },
      },
      Category: {
        ICategoryID: 27,
        SCategoryCode: "060",
        SCategoryDesc: "ABARROTES",
        LsGroup: null,
      },
      SItemName: "Aderezo ranch",
      SItemMark: "Clemente Jacques",
      ItemMeasure: "237 ML",
      DPrice: 35.0,
      SPahtImage:
        "https://royalresorts.com/wp-content/uploads/2017/market/AderezoRanchClemente.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 17,
      MinSell: 1,
    },
    {
      IItemID: 43522,
      SItemCode: "247946",
      SItemDesc: "ADEREZO WISHBONE RANCHERO 8OZ 182691",
      ItemExt: {
        Group: {
          IGroupID: 294,
          SGroupCode: "060290010 ",
          SGroupDesc: "ADEREZOS",
        },
      },
      Category: {
        ICategoryID: 27,
        SCategoryCode: "060",
        SCategoryDesc: "ABARROTES",
        LsGroup: null,
      },
      SItemName: "Aderezo ranchero",
      SItemMark: "Wish bone",
      ItemMeasure: "237 GR",
      DPrice: 74.0,
      SPahtImage:
        "https://royalresorts.com/wp-content/uploads/2017/market/AderezoWishboneRanchero.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 5,
      MinSell: 1,
    },
    {
      IItemID: 23215,
      SItemCode: "219685",
      SItemDesc: "AGUA ALCALINA ZOE 900ML",
      ItemExt: {
        Group: {
          IGroupID: 60,
          SGroupCode: "20030     ",
          SGroupDesc: "AGUA",
        },
      },
      Category: {
        ICategoryID: 14,
        SCategoryCode: "020",
        SCategoryDesc: "BEBIDAS NO ALCOHOLICAS",
        LsGroup: null,
      },
      SItemName: "Agua alcalina ionizada",
      SItemMark: "Zoé",
      ItemMeasure: "900 ML",
      DPrice: 44.0,
      SPahtImage:
        "https://royalresorts.com/wp-content/uploads/2017/market/AguaAlcalinaZoe.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 0,
      MinSell: 1,
    },
    {
      IItemID: 23216,
      SItemCode: "219686",
      SItemDesc: "AGUA ALCALINA ZOE 900ML SPORT",
      ItemExt: {
        Group: {
          IGroupID: 60,
          SGroupCode: "20030     ",
          SGroupDesc: "AGUA",
        },
      },
      Category: {
        ICategoryID: 14,
        SCategoryCode: "020",
        SCategoryDesc: "BEBIDAS NO ALCOHOLICAS",
        LsGroup: null,
      },
      SItemName: "Agua alcalina ionizada con electrolitos",
      SItemMark: "Zoé",
      ItemMeasure: "900 ML",
      DPrice: 47.0,
      SPahtImage:
        "https://royalresorts.com/wp-content/uploads/2017/market/AguaAlcalinaZoeSport.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 3,
      MinSell: 1,
    },
    {
      IItemID: 119,
      SItemCode: "134594",
      SItemDesc: "AGUA FIJI 1 LT",
      ItemExt: {
        Group: {
          IGroupID: 60,
          SGroupCode: "20030     ",
          SGroupDesc: "AGUA",
        },
      },
      Category: {
        ICategoryID: 14,
        SCategoryCode: "020",
        SCategoryDesc: "BEBIDAS NO ALCOHOLICAS",
        LsGroup: null,
      },
      SItemName: "Agua artesiana",
      SItemMark: "Fiji",
      ItemMeasure: "1 LT",
      DPrice: 85.0,
      SPahtImage:
        "https://royalresorts.com/wp-content/uploads/2017/market/AguaFiji1Lts.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 5,
      MinSell: 1,
    },
    {
      IItemID: 120,
      SItemCode: "134595",
      SItemDesc: "AGUA FIJI 500 ML",
      ItemExt: {
        Group: {
          IGroupID: 60,
          SGroupCode: "20030     ",
          SGroupDesc: "AGUA",
        },
      },
      Category: {
        ICategoryID: 14,
        SCategoryCode: "020",
        SCategoryDesc: "BEBIDAS NO ALCOHOLICAS",
        LsGroup: null,
      },
      SItemName: "Agua artesiana",
      SItemMark: "Fiji",
      ItemMeasure: "500 ML",
      DPrice: 49.0,
      SPahtImage:
        "https://royalresorts.com/wp-content/uploads/2017/market/AguaFiji500Ml.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 6,
      MinSell: 1,
    },
    {
      IItemID: 7112,
      SItemCode: "195778",
      SItemDesc: "CALAHUA ACAPULCOCO NATURAL 330ML TETR",
      ItemExt: {
        Group: {
          IGroupID: 280,
          SGroupCode: "020070    ",
          SGroupDesc: "REHIDRATANTES",
        },
      },
      Category: {
        ICategoryID: 14,
        SCategoryCode: "020",
        SCategoryDesc: "BEBIDAS NO ALCOHOLICAS",
        LsGroup: null,
      },
      SItemName: "Agua de coco",
      SItemMark: "Acapulcoco",
      ItemMeasure: "330 ML",
      DPrice: 26.0,
      SPahtImage:
        "https://royalresorts.com/wp-content/uploads/2017/market/CalahuaAcapulcocoNatural.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 1,
      MinSell: 1,
    },
    {
      IItemID: 29156,
      SItemCode: "228150",
      SItemDesc: "AGUA DE COCO GUD 330ML",
      ItemExt: {
        Group: {
          IGroupID: 280,
          SGroupCode: "020070    ",
          SGroupDesc: "REHIDRATANTES",
        },
      },
      Category: {
        ICategoryID: 14,
        SCategoryCode: "020",
        SCategoryDesc: "BEBIDAS NO ALCOHOLICAS",
        LsGroup: null,
      },
      SItemName: "Agua de coco",
      SItemMark: "Gud",
      ItemMeasure: "330 ML",
      DPrice: 32.0,
      SPahtImage:
        "https://royalresorts.com/wp-content/uploads/2017/market/AguaDeCocoGud.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 2,
      MinSell: 1,
    },
    {
      IItemID: 41883,
      SItemCode: "240320",
      SItemDesc: "AGUA DE COCO NAT. COCONIAU 330ML",
      ItemExt: {
        Group: {
          IGroupID: 280,
          SGroupCode: "020070    ",
          SGroupDesc: "REHIDRATANTES",
        },
      },
      Category: {
        ICategoryID: 14,
        SCategoryCode: "020",
        SCategoryDesc: "BEBIDAS NO ALCOHOLICAS",
        LsGroup: null,
      },
      SItemName: "Agua de coco",
      SItemMark: "Coco niau",
      ItemMeasure: "330 ML",
      DPrice: 28.0,
      SPahtImage:
        "https://www.royalresorts.com/wp-content/uploads/2019/market/AGUA-COCO-NIAU-330ML.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 2,
      MinSell: 1,
    },
    {
      IItemID: 7111,
      SItemCode: "194990",
      SItemDesc: "CALAHUA ACAPULCOCO PIÑA 330ML TETR",
      ItemExt: {
        Group: {
          IGroupID: 280,
          SGroupCode: "020070    ",
          SGroupDesc: "REHIDRATANTES",
        },
      },
      Category: {
        ICategoryID: 14,
        SCategoryCode: "020",
        SCategoryDesc: "BEBIDAS NO ALCOHOLICAS",
        LsGroup: null,
      },
      SItemName: "Agua de coco con jugo de piña",
      SItemMark: "Acapulcoco",
      ItemMeasure: "330 ML",
      DPrice: 26.0,
      SPahtImage:
        "https://www.royalresorts.com/wp-content/uploads/2019/market/CALAHUA-ACAPULCOCO-PINA-330ML-TETR.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 1,
      MinSell: 1,
    },
    {
      IItemID: 33741,
      SItemCode: "235623",
      SItemDesc: "AGUA ACAPULCOCO ORGANICA 330ML",
      ItemExt: {
        Group: {
          IGroupID: 605,
          SGroupCode: "060060    ",
          SGroupDesc: "PRODUCTOS SALUDABLES",
        },
      },
      Category: {
        ICategoryID: 76,
        SCategoryCode: "0060",
        SCategoryDesc: "PRODUCTOS SALUDABLES",
        LsGroup: null,
      },
      SItemName: "Agua de coco orgánica",
      SItemMark: "Acapulcoco",
      ItemMeasure: "330 ML",
      DPrice: 29.0,
      SPahtImage:
        "https://www.royalresorts.com/wp-content/uploads/2019/market/AGUA-ACAPULCOCO-ORGANICA-330ML.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 2,
      MinSell: 1,
    },
    {
      IItemID: 32901,
      SItemCode: "232986",
      SItemDesc: "BEB. COCO TERRAFERTIL NAT.HEART 946ML",
      ItemExt: {
        Group: {
          IGroupID: 605,
          SGroupCode: "060060    ",
          SGroupDesc: "PRODUCTOS SALUDABLES",
        },
      },
      Category: {
        ICategoryID: 76,
        SCategoryCode: "0060",
        SCategoryDesc: "PRODUCTOS SALUDABLES",
        LsGroup: null,
      },
      SItemName: "Agua de coco sin azúcar",
      SItemMark: "Nature´s Heart",
      ItemMeasure: "1 LT",
      DPrice: 59.0,
      SPahtImage:
        "https://www.royalresorts.com/wp-content/uploads/2019/market/BEB-COCO-TERRAFERTIL-NAT-HEART-946ML.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 3,
      MinSell: 1,
    },
    {
      IItemID: 29087,
      SItemCode: "115100",
      SItemDesc: "AGUA POLAND SPRING SIX PACK 6/500ML",
      ItemExt: {
        Group: {
          IGroupID: 60,
          SGroupCode: "20030     ",
          SGroupDesc: "AGUA",
        },
      },
      Category: {
        ICategoryID: 14,
        SCategoryCode: "020",
        SCategoryDesc: "BEBIDAS NO ALCOHOLICAS",
        LsGroup: null,
      },
      SItemName: "Agua de manantial",
      SItemMark: "Poland Spring",
      ItemMeasure: "6/500 ML",
      DPrice: 205.0,
      SPahtImage:
        "https://royalresorts.com/wp-content/uploads/2016/market/water-poland.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 49,
      MinSell: 1,
    },
    {
      IItemID: 29086,
      SItemCode: "112837",
      SItemDesc: "AGUA POLAND SPRING 700 ML.PURIFICADA",
      ItemExt: {
        Group: {
          IGroupID: 60,
          SGroupCode: "20030     ",
          SGroupDesc: "AGUA",
        },
      },
      Category: {
        ICategoryID: 14,
        SCategoryCode: "020",
        SCategoryDesc: "BEBIDAS NO ALCOHOLICAS",
        LsGroup: null,
      },
      SItemName: "Agua de manantial",
      SItemMark: "Poland Spring",
      ItemMeasure: "700 ML",
      DPrice: 35.0,
      SPahtImage:
        "https://royalresorts.com/wp-content/uploads/2017/market/AguaPolandSpring700Ml.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 7,
      MinSell: 1,
    },
    {
      IItemID: 29622,
      SItemCode: "112835",
      SItemDesc: "AGUA POLAND SPRING 1 LTO.PURIFICADA",
      ItemExt: {
        Group: {
          IGroupID: 60,
          SGroupCode: "20030     ",
          SGroupDesc: "AGUA",
        },
      },
      Category: {
        ICategoryID: 14,
        SCategoryCode: "020",
        SCategoryDesc: "BEBIDAS NO ALCOHOLICAS",
        LsGroup: null,
      },
      SItemName: "Agua de manantial",
      SItemMark: "Poland Spring",
      ItemMeasure: "1 LT",
      DPrice: 49.0,
      SPahtImage:
        "https://royalresorts.com/wp-content/uploads/2017/market/AguaPolandSpring1Lto.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 3,
      MinSell: 1,
    },
    {
      IItemID: 2277,
      SItemCode: "120427",
      SItemDesc: "AGUA MINERAL PERRIER 750ML",
      ItemExt: {
        Group: {
          IGroupID: 176,
          SGroupCode: "020010030 ",
          SGroupDesc: "AGUA MINERAL",
        },
      },
      Category: {
        ICategoryID: 14,
        SCategoryCode: "020",
        SCategoryDesc: "BEBIDAS NO ALCOHOLICAS",
        LsGroup: null,
      },
      SItemName: "Agua mineral",
      SItemMark: "Perrier",
      ItemMeasure: "750 ML",
      DPrice: 63.0,
      SPahtImage:
        "https://royalresorts.com/wp-content/uploads/2016/market/Perrier-Sparkling water.png",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 5,
      MinSell: 1,
    },
    {
      IItemID: 1267,
      SItemCode: "76506",
      SItemDesc: "REF.CLUB SODA LATA 355ML. CANADA DRY",
      ItemExt: {
        Group: {
          IGroupID: 176,
          SGroupCode: "020010030 ",
          SGroupDesc: "AGUA MINERAL",
        },
      },
      Category: {
        ICategoryID: 14,
        SCategoryCode: "020",
        SCategoryDesc: "BEBIDAS NO ALCOHOLICAS",
        LsGroup: null,
      },
      SItemName: "Agua mineral",
      SItemMark: "Canada Dry",
      ItemMeasure: "355 ML",
      DPrice: 21.0,
      SPahtImage:
        "http://royalresorts.com/wp-content/uploads/2016/market/club-soda.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 52,
      MinSell: 6,
    },
    {
      IItemID: 829,
      SItemCode: "115099",
      SItemDesc: "REF.AGUA MINERAL GARCI CRESPO 2LTO.",
      ItemExt: {
        Group: {
          IGroupID: 176,
          SGroupCode: "020010030 ",
          SGroupDesc: "AGUA MINERAL",
        },
      },
      Category: {
        ICategoryID: 14,
        SCategoryCode: "020",
        SCategoryDesc: "BEBIDAS NO ALCOHOLICAS",
        LsGroup: null,
      },
      SItemName: "Agua mineral",
      SItemMark: "Garci Crespo",
      ItemMeasure: "2 LT",
      DPrice: 33.0,
      SPahtImage:
        "https://royalresorts.com/wp-content/uploads/2017/market/AguaMineralGarciCrespo.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 15,
      MinSell: 1,
    },
    {
      IItemID: 2270,
      SItemCode: "119668",
      SItemDesc: "AGUA MINERAL PERRIER 330ML",
      ItemExt: {
        Group: {
          IGroupID: 176,
          SGroupCode: "020010030 ",
          SGroupDesc: "AGUA MINERAL",
        },
      },
      Category: {
        ICategoryID: 14,
        SCategoryCode: "020",
        SCategoryDesc: "BEBIDAS NO ALCOHOLICAS",
        LsGroup: null,
      },
      SItemName: "Agua mineral",
      SItemMark: "Perrier",
      ItemMeasure: "330 ML",
      DPrice: 31.0,
      SPahtImage:
        "https://royalresorts.com/wp-content/uploads/2017/market/AguaMineralPerrier330Ml.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 7,
      MinSell: 1,
    },
    {
      IItemID: 25950,
      SItemCode: "223534",
      SItemDesc: "SAN PELLEGRINO ARANC.ROSSA 330ML LATA",
      ItemExt: {
        Group: {
          IGroupID: 176,
          SGroupCode: "020010030 ",
          SGroupDesc: "AGUA MINERAL",
        },
      },
      Category: {
        ICategoryID: 14,
        SCategoryCode: "020",
        SCategoryDesc: "BEBIDAS NO ALCOHOLICAS",
        LsGroup: null,
      },
      SItemName: "Agua mineral aranciara rosa",
      SItemMark: "SanPellegrino",
      ItemMeasure: "330 ML",
      DPrice: 35.0,
      SPahtImage:
        "https://royalresorts.com/wp-content/uploads/2017/market/SanPellegrinoArancRossaLata.jpg",
      YnFeaturedItem: false,
      YnAllowFractionalSale: 0,
      IRankingSales: 5,
      MinSell: 1,
    },
  ];
  const [storeItems, setItems] = useState(items);
  const [queryParams, setQParams] = useState("");
  const [cart, setCartS] = useState({
    itemsCart: [],
    itemsCount: 0,
    totalPrice: 0.042,
  });
  let updateCart = (items) => {
    setCartS(items);
  };

  const initialCart = {
    cart: cart,
    setCart: updateCart,
  };
  const value = { storeItems, setItems };
  return (
    <CartContext.Provider value={initialCart}>
      <ThemeContext.Provider value={value}>
        <Router>
          <Suspense fallback="Loading">
            <Header datos={items} setQP={setQParams} cat={getCat} />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/s">
                <Search QP={queryParams} items={storeItems} />
              </Route>
              <Route exact path="/products">
                <Categories cat={getCat} />
              </Route>
              <Route exact path="/products/:producto">
                <Detail items={storeItems} />
              </Route>
              <Route exact path="/categories">
                <Categories cat={getCat} />
              </Route>
              <Route exact path="/categories/:id">
                <Categories cat={getCat} />
              </Route>
              <Route exact path="/categories/:id/:subid">
                <Categories cat={getCat} />
              </Route>
            </Switch>
            <BacktoTop />
            <Footer />
          </Suspense>
        </Router>
      </ThemeContext.Provider>
    </CartContext.Provider>
  );
}

export default hot(module)(App);

import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Form, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AutoSuggest from "../../hook/provice";
import { IoMdRefresh } from "react-icons/io";

function Cafe() {
  const dataCom = [
    {
      num: 1,
      title: "NOV x IRL Coffee Bar",
      title_th: "NOV x IRL Coffee Bar",
      img: `${'https://cms.dmpcdn.com/food/2022/01/11/0a4b5710-72a6-11ec-946f-3753626f8ba2_webp_original.jpg'}`,
      image: [
        {
          id: 1,
          img: `${'https://cms.dmpcdn.com/food/2022/01/11/0a4b5710-72a6-11ec-946f-3753626f8ba2_webp_original.jpg'}`,
        },
        {
          id: 1,
          img: `${'https://scontent.fbkk12-2.fna.fbcdn.net/v/t39.30808-6/337299031_1360285738156144_3620234623308969992_n.png?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG8M8rEJp4TqllADupgCk8L9QbF4UlPiDf1BsXhSU-IN0qvnrBxEmt5QRyDVQ90wQRJFhQcRpJ1UHQYb7RKqpzt&_nc_ohc=m42JMjKmkaYQ7kNvgGbB_Ij&_nc_oc=Adko2p5l1c9hLnSmjLdMoMeZduFQc_UHOyeKKMEQI_Et-Ki6Iq7r_CJuZBibGGCBWwGb604Ctoo8hrKdP_qj01e3&_nc_zt=23&_nc_ht=scontent.fbkk12-2.fna&_nc_gid=Lh2OcO2wmi1Xm6RwW-eRNA&oh=00_AYHHBytvS9bgeKodMpRrgttw2IDkUeGdqKn_w1_LsPYwig&oe=67EED993'}`,
        },
        {
          id: 1,
          img: `${'https://scontent.fbkk12-3.fna.fbcdn.net/v/t39.30808-6/337151774_537725635155538_8568389163676865871_n.png?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH0EmWXozwt3142EAJtlTi61Ju6pc5qSVjUm7qlzmpJWE0CO84knuxy3bM93Bx64yOHpfHLmjmiL86uYHvmJbyH&_nc_ohc=bYWVSBKovv8Q7kNvgEavJfh&_nc_oc=Adm2o1NHXGijdrEgAMCR2go4hIKULVN7L0IqqsOsLuwjZK8pOYm2jaNPhrPb1BkrsdIAzcc26ED9EtKHGfOVhFh9&_nc_zt=23&_nc_ht=scontent.fbkk12-3.fna&_nc_gid=J8Ego-M3rDKNRnTTs0VLlQ&oh=00_AYH8Mqk8P6HF3oSqtBkYmPGXx4-UGtS35lkRGciXXN33-Q&oe=67EF09CF'}`,
        },
        {
          id: 1,
          img: `${'https://scontent.fbkk13-3.fna.fbcdn.net/v/t39.30808-6/476833686_632153412659033_8899931289774581233_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHgmzhSgKTzYG0BPUMtsNneqJa2k7qnDT6olraTuqcNPv3Gl9ezZEu_gkxOAQ0leGNp_iRFfg_W8rhSkVol7yFL&_nc_ohc=DNIYQi6jUgUQ7kNvgH_OMDq&_nc_oc=Admei5NOIyf-sgVC3hsvjd5U8vc9VUOfTfyIKKxehB1esjseiufXSS6YAIv8BwV_KOTHsbc4wzCeS1donqHCn39_&_nc_zt=23&_nc_ht=scontent.fbkk13-3.fna&_nc_gid=8Asl7m5xwJVgQVy1QTxJzw&oh=00_AYGckAYFeja5B1x5c7vlx5AODw0qchkG0MayovnTu0hIsQ&oe=67EF0A6C'}`,
        },
        {
          id: 1,
          img: `${'https://img.wongnai.com/p/1920x0/2022/12/28/5e50e3ce3a7e408ebfaadb8871c22ffa.jpg'}`,
        },
      ],
      district: 'จตุจักร',
      subDistrict: 'ลาดยาว',
      subData: [
        {
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.0217215324433!2d100.5439318!3d13.8377342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29d11b2115d81%3A0xe441a440ffb6b07c!2sNOV%20COFFEE%20BAR!5e0!3m2!1sen!2sth!4v1743322474933!5m2!1sen!2sth',
          address: '23 ซอย เทศบาลรังสรรใต้ แขวงลาดยาว เขตจตุจักร กรุงเทพฯ',
          open: 'จันทร์-พุธ, ศุกร์ 08.00 - 17.00 น. / เสาร์-อาทิตย์ 09.00 - 18.00 น. (ปิดพฤหัสบดี)',
          parking: 'จอดรถริมถนน',
          web: 'https://www.facebook.com/novcoffeebar/',
          refer: 'เพจ โน่น นั่น นี่  IG : nonnunnee.ig',
          phone: '064 694 5554'
        }
      ]
    },
    {
      num: 2,
      title: "Little Zoo Cafe",
      title_th: "ลิเติลซู คาเฟ่",
      img: `${'https://lh3.googleusercontent.com/p/AF1QipNntuyVjqKHakT8cPY1Lfg8lxo_5VIX8m9O6ClB=s1360-w1360-h1020'}`,
      image: [
        {
          id: 1,
          img: `${'https://lh3.googleusercontent.com/p/AF1QipNntuyVjqKHakT8cPY1Lfg8lxo_5VIX8m9O6ClB=s1360-w1360-h1020'}`,
        },
        {
          id: 2,
          img: `${'https://cdn.prod.rexby.com/image/9ab0b958acea49cda7d047af08a321c6?format=webp&width=1080&height=1350'}`,
        },
        {
          id: 3,
          img: `${'https://www.chillpainai.com/src/wewakeup/scoop/img_scoop/scoop/kang/FWD/littlezoo/Little%20Zoo-16.JPG'}`,
        },
        {
          id: 4,
          img: `${'https://img.wongnai.com/p/400x0/2023/08/25/52abbd69d4334c2286694f3c4b474c08.jpg'}`,
        },
        {
          id: 5,
          img: `${'https://img.wongnai.com/p/400x0/2023/08/25/bf02a0a782d64656bc06465d586180a0.jpg'}`,
        },
      ],
      district: 'สวนหลวง',
      subDistrict: 'สวนหลวง',
      subData: [
        {
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.117593657428!2d100.60385239678953!3d13.711326999999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f73b3214e43%3A0xae72e3f52f8e9c9c!2sLittle%20Zoo%20Caf%C3%A9!5e0!3m2!1sen!2sth!4v1743322699891!5m2!1sen!2sth',
          address: '486 อ่อนนุช แขวงสวนหลวง เขตสวนหลวง กรุงเทพฯ',
          open: 'จันทร์-เสาร์ 11.00 - 19.00 น.(ปิดวันอาทิตย์)',
          parking: '-',
          web: 'https://littlezoocafe.com/',
          refer: '',
          phone: '092 448 1116'
        }
      ]
    },
    {
      num: 3,
      title: "The Wood Land",
      title_th: "เดอะ วูด แลนด์",
      img: `${'https://img-prod.api-onscene.com/cdn-cgi/image/format=auto,width=3200/https://sls-prod.api-onscene.com/partner_files/trueidintrend/258029/cover_image/S__69181449.jpg'}`,
      image: [
        {
          id: 1,
          img: `${'https://img-prod.api-onscene.com/cdn-cgi/image/format=auto,width=3200/https://sls-prod.api-onscene.com/partner_files/trueidintrend/258029/cover_image/S__69181449.jpg'}`,
        },
        {
          id: 2,
          img: `${'https://scontent.fbkk8-2.fna.fbcdn.net/v/t51.75761-15/486489836_18036251126618085_8629841009233288675_n.jpg?stp=dst-jpegr_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGgzmgetdoRD8KtscF2Oq6G3yti2lvYYv7fK2LaW9hi_hzZFxp5qBYZQ762i_iJrybjSu8N4jDRVnHa_wDotitv&_nc_ohc=Bz6yRhSQ2GYQ7kNvgEsDE8n&_nc_oc=AdnQZJpuh7BXjAD-CMTl6lAj9MLCZDDu9qppxIk9kb0JFf_0ttJrjqPQkbo3ovTZECy9StyRIwsyNvCGok2ybk1x&_nc_zt=23&se=-1&_nc_ht=scontent.fbkk8-2.fna&_nc_gid=Ug6r_Io3-pGExfeJVoSdpA&oh=00_AYEoxNgXRV90M9b7kHyo4VJ-W19br2lvmPFC4sNwgyYyXQ&oe=67EF49CD'}`,
        },
        {
          id: 3,
          img: `${'https://scontent.fbkk12-2.fna.fbcdn.net/v/t51.75761-15/485625628_18035724041618085_9076763513934088816_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGd57XN_VwWD3ck4a-M3g67rnJMzOCcSkGuckzM4JxKQU97A8WfCtF2JQChKWc0Omq5EjyYHrPL-vT9KFqrMPw6&_nc_ohc=YBamqpwuO5wQ7kNvgGvA-jB&_nc_oc=AdlUair_F1KhRrpDvtWr80Wylvuvxg1JtEjld59cLZtSXrUf_7jJuh9IVFhC9oU8Txk5e9SGGuwkyNVjimWFQa5m&_nc_zt=23&_nc_ht=scontent.fbkk12-2.fna&_nc_gid=n7Zb-iD4DBXzPnzxTHpS7Q&oh=00_AYG6M5eGTSzTkK3X9nXi6-lTCVOOxHAH5_ANqyLhvQeMkg&oe=67EF1782'}`,
        },
        {
          id: 4,
          img: `${'https://scontent.fbkk12-6.fna.fbcdn.net/v/t51.75761-15/482994928_18034006079618085_7460852416780669375_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHt42TFPa0sKRX9E9hXY3F0CUCgm_-nSDwJQKCb_6dIPHFZB1UYwxxiGPwiWBYmsJhrjf9tmPQHUtunZ9si4BlN&_nc_ohc=6EFcWHWeufIQ7kNvgGCpwyO&_nc_oc=AdkVjyCgHLi0W2YyU8SRIZ5McI6_GWZwostn26q75WCDCAVHS2CSZiZVUWzzkWR2nPsLWBGJ5WOasQQAehEAtmuP&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&_nc_gid=oH7OByk9BS70uu8DPy9NTQ&oh=00_AYE63UhBJh6L8_I0qnyFzDPJvvybbUvpFlz7LgrP0-ZzQw&oe=67EF2255'}`,
        },
        {
          id: 5,
          img: `${'https://scontent.fbkk12-2.fna.fbcdn.net/v/t39.30808-6/481493676_669721802251300_5795812843007755244_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHBy1cUChMTrahrN6BJCwHy5HB5MBXBAcjkcHkwFcEByI7rrkKkcI9elnl0z5UAVrgIq7fGRBsqTPTGGbmFcmt8&_nc_ohc=ZRhBRxzSBV0Q7kNvgEA3Op5&_nc_oc=AdmfSSOVhw7dW-LfcVQYusjYNSG3HOkpid1fBV8yWPx2PlR1vAV9vRG_MHvDsf82-uSqt9UlNUOIuKQ02XaAMw8U&_nc_zt=23&_nc_ht=scontent.fbkk12-2.fna&_nc_gid=0-IyDJDwcECcF8bRoMRQnQ&oh=00_AYHMF8bN_vGzYxhhFUQgKYilhlzraTZ9hW42jyK92n6NYA&oe=67EF25C7'}`,
        },
      ],
      district: 'พระโขนง',
      subDistrict: 'บางจาก',
      subData: [
        {
          map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31009.874076094737!2d100.60078!3d13.704257!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f81c6cef16d%3A0xfd37c7b4d141b399!2sTHE%20WOOD%20LAND!5e0!3m2!1sen!2sth!4v1743325541845!5m2!1sen!2sth',
          address: '17 สุขุมวิท 52 แขวงบางจาก เขตพระโขนง กรุงเทพฯ',
          open: 'จันทร์-ศุกร์ 09.00 - 19.00 น. / เสาร์-อาทิตย์ 08.30 - 19.30 น.',
          parking: '-',
          web: 'https://food.trueid.net/detail/gW4z0l1v3bx8?utm_source=web-trueid&utm_medium=ctw&utm_term=clicklink&utm_campaign=food_g8YZo1XXzoXA_relatecontent_intrend_gW4z0l1v3bx8_12/01/2022',
          refer: 'ภาพจาก ทรูไอดี ครีเอเตอร์ : pawangnittra',
          phone: '061 391 1754'
        }
      ]

    },
    {
      num: 4,
      title: "Happy Mum Happy Me",
      title_th: "แฮปปี้มัม แฮปปี้มี",
      img: `${'https://scontent.fbkk13-3.fna.fbcdn.net/v/t39.30808-6/365431726_792622426199576_2318564869954385646_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=QMXpczGiO6sQ7kNvgF_8zyY&_nc_oc=AdkZjgrOVPo0OSg4pb19mtZTpoUiGF3fBDTiFDmQvE3Ip2QmCBrB-_uVI_Q72DsV7DidPZeKTNztv9rwigaihKlO&_nc_zt=23&_nc_ht=scontent.fbkk13-3.fna&_nc_gid=rCSyTi4EcFB_QDj8U-bnJQ&oh=00_AYEhNncSMH_zDkkgmwg-SSIsT2y640_05NvQ103fVdnPgA&oe=67EEF91D'}`,
      image: [
        {
          id: 1,
          img: `${'https://scontent.fbkk13-3.fna.fbcdn.net/v/t39.30808-6/365431726_792622426199576_2318564869954385646_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=QMXpczGiO6sQ7kNvgF_8zyY&_nc_oc=AdkZjgrOVPo0OSg4pb19mtZTpoUiGF3fBDTiFDmQvE3Ip2QmCBrB-_uVI_Q72DsV7DidPZeKTNztv9rwigaihKlO&_nc_zt=23&_nc_ht=scontent.fbkk13-3.fna&_nc_gid=rCSyTi4EcFB_QDj8U-bnJQ&oh=00_AYEhNncSMH_zDkkgmwg-SSIsT2y640_05NvQ103fVdnPgA&oe=67EEF91D'}`,
        },
        {
          id: 2,
          img: `${'https://scontent.fbkk12-3.fna.fbcdn.net/v/t39.30808-6/487197706_979552300821225_7367484353898220105_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFQsIvqFVAgP1ADMdnLx-sqbh94KNlkAgRuH3go2WQCBI1BiD7Q78Osa4cy87HuAbXDMyytkTVvdr9fJc2VOrYj&_nc_ohc=cozce2ubh6cQ7kNvgEdo7cg&_nc_oc=Adm1o89usOFsN8KncrEOhDXu1gTh9ABs1B4IVn0qGcWJ3FlqMZjVmRKindSV5x1775IIZbSt9K45y9fimNqx3xX8&_nc_zt=23&_nc_ht=scontent.fbkk12-3.fna&_nc_gid=UPp3v7vnFhK0CLQy2O16RQ&oh=00_AYEVekoLy7jvCrWrQ_7vaxGNYZ9qzxbE7UBaIKXYegZcqA&oe=67EF3614'}`,
        },
        {
          id: 3,
          img: `${'https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-6/487310591_979549094154879_1138542978447209640_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFCv4GGbIn0DWu1SM0g1GcnUMepKqknqClQx6kqqSeoKQOCx0E3LGvIqX0MtG_J_nAQCy1jj_HKvBRxXTig0BEa&_nc_ohc=wI0Ti54GPCAQ7kNvgHhD51y&_nc_oc=Adm3jEfZDNBTMm9fo9HZGxEPiimjtH1fwtcZDiAl9yHDNluhI8P8ThhFhHL4GTrxMH-aRWAUpk5cOqCVVKqaX3kg&_nc_zt=23&_nc_ht=scontent.fbkk13-2.fna&_nc_gid=H9YBvwPVTM-Rk-GtfD2M9w&oh=00_AYEgzbUsNOfXx740m2Be6xWsUXZFnqUu2gj6M5AviKHW9Q&oe=67EF1FEC'}`,
        },
        {
          id: 4,
          img: `${'https://scontent.fbkk12-3.fna.fbcdn.net/v/t51.75761-15/485005569_18491733877049780_5826443544765014183_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFjhadJuDUFUVvD-P6krGWeOiug_tRNUj06K6D-1E1SPfgsUhrgc0HFD0C8uPlDQ0KcbxlEGznnd-NuzILm0-7n&_nc_ohc=efPwKI_wbZwQ7kNvgGUv6yo&_nc_oc=AdnQzTJgC54pXnI-JXW5hajeX98TZrBqAKV7pin43V4i3cN3BDN5w1hXCmrJ4_mnyciJ-tyrB2XfE-wjKzTJXnoz&_nc_zt=23&_nc_ht=scontent.fbkk12-3.fna&_nc_gid=4KrcgOoaHEbY6jvHSUvdpQ&oh=00_AYFJ-yD-dJWIF04CgLW1nEC7kCfSJJx0CR64dLNe8Z-Ikw&oe=67EF36C6'}`,
        },
        {
          id: 5,
          img: `${'https://scontent.fbkk13-3.fna.fbcdn.net/v/t51.75761-15/484513934_18491733916049780_5353101321671861788_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHLm6K-msSJZ4iNhu6x_0ThSAYmZUcNq5RIBiZlRw2rlGd29uHz0JsVk1aqDnaFjRiaUkm-qP8u4HbzPF_CBG3x&_nc_ohc=FUBp2nIwaRIQ7kNvgHr2dwS&_nc_oc=AdmZIrt_Spjv4RigW8nIolPyEyVLy49cuZTqKNAwfh6V6O3ULbCTedH7FqLPFoJFY1Qcp7JjvUFu7nxXLANZ1nEn&_nc_zt=23&_nc_ht=scontent.fbkk13-3.fna&_nc_gid=_UhMOKzyzLRvZyYz5R-iaQ&oh=00_AYHZFrFjmRm3W46S6MvprYxCLUa4msDWF4VY2xoeSu9bfQ&oe=67EF19E3'}`,
        },
      ], district: 'บึงกุ่ม',
      subDistrict: 'คลองกุ่ม',
      subData: [
        {
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.5751811851937!2d100.65717577509119!3d13.80446398659291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6357bf1fd6a9%3A0xa0e2557d5332a8cb!2sHappy%20Mum%20Happy%20Me!5e0!3m2!1sen!2sth!4v1744352789099!5m2!1sen!2sth',
          address: '30 442 ซอย นวมินทร์ 42 แยก 25-1-1 แขวงคลองกุ่ม เขตบึงกุ่ม กรุงเทพมหานคร 10240',
          open: 'เสาร์-อาทิตย์ 9.30-17.30, พฤหัสบดี-ศุกร์ 07.00 - 16.30 น.',
          parking: '-',
          web: 'https://www.facebook.com/happymum.happyme',
          refer: '',
          phone: '065 156 6949'
        }
      ]

    },
    {
      num: 5,
      title: "Rawvaela Cafe",
      title_th: "รอเวลา คาเฟ่",
      img: `${'https://lh5.googleusercontent.com/p/AF1QipO6kbpkw7C7CeF755lWXsMK81aqR9Ob87tMtVUx=w408-h510-k-no'}`,
      image: [
        {
          id: 1,
          img: `${'https://lh5.googleusercontent.com/p/AF1QipO6kbpkw7C7CeF755lWXsMK81aqR9Ob87tMtVUx=w408-h510-k-no'}`,
        },
        {
          id: 2,
          img: `${'https://scontent.fbkk8-4.fna.fbcdn.net/v/t51.75761-15/487873425_18064010573486281_385350958232359713_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF4szNc0QODd4EY0Yt1cQpmGNDTHIg_nJQY0NMciD-clEPMMqmEm-EqRIWCzADuYhmtMEHIXojUFfhAngsQnLdh&_nc_ohc=jQaOo4sQLbYQ7kNvgHgbuNJ&_nc_oc=AdlLxz8wwWuMzEC0drA6J8-GZ7XRBvmxgYt5iHAcki6bdm-ToF7U1LJslCWVijOcymwUfWmn6kPC1Jxr29li4uXL&_nc_zt=23&_nc_ht=scontent.fbkk8-4.fna&_nc_gid=YPYCWtRgm-NgYHZYQ9KKnw&oh=00_AYF3KSCcuEZ1Y_I78opnifSUFGxBvAQKmTTGQA0efgoAWg&oe=67EF350B'}`,
        },
        {
          id: 3,
          img: `${'https://scontent.fbkk12-3.fna.fbcdn.net/v/t51.75761-15/486592695_18063900398486281_7451841872401422964_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEMPZ_ML0uMHiWlh0D2kPTu1la6g-9XFlLWVrqD71cWUgrZaoNvzn0krt8dHo71g_p16b9w5FxltFWDBRj3orW7&_nc_ohc=fIhmcPU4BC8Q7kNvgEzqmGo&_nc_oc=Adm9G_b4qD99Ufnfw2DLOllZbX3HsvSqGTKAGrURqDewmHWL7cxJtDSa3OHjv0NxUzQtIFNMWgg44z9q7mGsdej0&_nc_zt=23&_nc_ht=scontent.fbkk12-3.fna&_nc_gid=3zgore6kAKHQBgnVFeMlzA&oh=00_AYHf4IvyZZMZZi_e4B1uH2o4_RS2Fe6k-euWDJIBirdJVg&oe=67EF312F'}`,
        },
        {
          id: 4,
          img: `${'https://scontent.fbkk12-2.fna.fbcdn.net/v/t51.75761-15/486653490_18063799238486281_7626325947325270291_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGaLGvM4ZqZVoEJASewuS7NIdyfpqbBKsEh3J-mpsEqwX5ltl2HCz74lsdiCqTDhL4zKR7GWbMrxwM_lYXh6XtZ&_nc_ohc=MRBuk5NTiIQQ7kNvgFujCf5&_nc_oc=AdmkAQDrc6IAfIbFH1XR5QQHcBslj9V0EvRwSKS41bmYuVzKjuyhkoaM2hPLI-8Md1qBC88VQFWXZIu3vl-JAGqG&_nc_zt=23&_nc_ht=scontent.fbkk12-2.fna&_nc_gid=pBRfWwv6raKYe0ZDHsHgmw&oh=00_AYGEs8trGXP7shBHdMdVurdqIn2DX15IQI_qCG2-1H1GrA&oe=67EF20CC'}`,
        },
        {
          id: 5,
          img: `${'https://scontent.fbkk12-6.fna.fbcdn.net/v/t51.75761-15/485454160_18063083822486281_1413895157572679842_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHde9ZXG71crnrfAtucP18J8_NInQjZ0__z80idCNnT_94hWmzPubb2YqYwJ-soyCKRCvx_2XlnowfW2DZGBjuS&_nc_ohc=iPUeAQwYZMgQ7kNvgGvTPiP&_nc_oc=Adn6Ue9zJ3eG7VwS7oBx-hivKoJZSyUCQj8UtjgVtRLcd-btOoU59Niuz9nsKiG5_Z-Oi8ld4VC0g9ZCqy4srKga&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&_nc_gid=etdInldRgFcXRnV6c67ADg&oh=00_AYEKEyAxnUn5ZFKDNLDVCudCHX4W2UahTWees8qnL8vVcg&oe=67EF2A68'}`,
        },
      ],
      district: 'ตลิ่งชัน',
      subDistrict: 'บางระมาด',
      subData: [
        {
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.287539292008!2d100.4164414!3d13.7615258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2975dde266cd3%3A0xec611205c4d5ac0c!2zUmF3dmFlbGEgQ2FmZSAo4Lij4Lit4LmA4Lin4Lil4LiyIOC4hOC4suC5gOC4n-C5iCk!5e0!3m2!1sen!2sth!4v1743326300350!5m2!1sen!2sth',
          address: '101 ถนนบางระมาด แขวงบางระมาด เขตตลิ่งชัน กรุงเทพฯ',
          open: 'จันทร์-อังคาร, พฤหัสบดี-ศุกร์ 10.00 - 18.00 น. / เสาร์-อาทิตย์ 08.30 - 18.00 น. (ปิดวันพุธ)',
          parking: '',
          web: 'https://www.facebook.com/rawvaelacafe/',
          refer: '-',
          phone: '096 009 6909'
        }
      ]

    },
    {
      num: 6,
      title: "GLIG CAFE",
      title_th: "GLIG CAFE",
      img: `${'https://cms.dmpcdn.com/food/2022/08/01/9f1c47f0-1175-11ed-b144-198f31587101_original.jpg'}`,
      image: [
        {
          id: 1,
          img: `${'https://cms.dmpcdn.com/food/2022/08/01/9f1c47f0-1175-11ed-b144-198f31587101_original.jpg'}`,
        },
        {
          id: 2,
          img: `${'https://scontent.fbkk13-1.fna.fbcdn.net/v/t39.30808-6/482349898_621263347328666_7959236211913451397_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEkY3e5CGfVIvsgK_SVxu_MyNrKjWN3p6vI2sqNY3enq7OwyDz6hgXI_4vYBv9yRI3h1xbFa7T2uL8b430nXO1G&_nc_ohc=jmpRIZK5RwkQ7kNvgHJ-zV_&_nc_oc=AdmpLBWkHzpxKFJpKZTqJ_zSg1KviYqXNbHOeCTNZEUYfSlR2NIHmUnSiDxC8TaDxWk3P6k_KAaHBYyHorbWpdFL&_nc_zt=23&_nc_ht=scontent.fbkk13-1.fna&_nc_gid=q0IkIKRD62HnjkOp6cABxQ&oh=00_AYHM_aF36ZBVzhqNL9hdxQn1Cq5GQFX5iUq4WU9ge3XsYw&oe=67EF24A4'}`,
        },
        {
          id: 3,
          img: `${'https://scontent.fbkk13-3.fna.fbcdn.net/v/t39.30808-6/484180545_620745104047157_7930339894867649225_n.jpg?stp=cp6_dst-jpg_p526x296_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHuv9VMVjtZ8weL3N_mZpB9BImy1MAdYKUEibLUwB1gpVFwOiG_oqJMKTjkdIusNGyPqEW19luUq8rWOSH894K0&_nc_ohc=teBCNuYvosEQ7kNvgEkQX64&_nc_oc=Adm0TktizVWeRlI0khwnnvXf7NSCaNdBrUlrdGec3-b7l0yIS3QT_q296UrHTpyF6om9dAhOZ2Obm18at_0e2dTt&_nc_zt=23&_nc_ht=scontent.fbkk13-3.fna&_nc_gid=MfsCoFk6shJUA7GmEhv6bw&oh=00_AYFljOg71KgI74wu_CWN9KtU-qGNvXPGC1ZmRHY6OoMJZg&oe=67EF230C'}`,
        },
        {
          id: 4,
          img: `${'https://scontent.fbkk12-3.fna.fbcdn.net/v/t39.30808-6/481983879_619240000864334_5686253206152563482_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeErBu8qpLaQyEl4tftXeu9luThldqksUqy5OGV2qSxSrGPWmIl5uDocQEGUVO1hlQpNvAo3L6z36Dkhn97nCGIr&_nc_ohc=BxRbw_gUn24Q7kNvgEdIGp0&_nc_oc=AdkrjP08wBxBL_4A8Mn8UBLO_JPhVzgn5NHmVeDf1udsC7_R6SlGflc09M_zdgbh2hIWh7q0f2A_DHhQaKvz7XJh&_nc_zt=23&_nc_ht=scontent.fbkk12-3.fna&_nc_gid=NcOXuVQ1jQDGQ1OtiZW_XA&oh=00_AYG41ma76Zcgi8aS-iCnsUhUYLOfVWgupEBW6M6f61Vjlw&oe=67EF3978'}`,
        },
        {
          id: 5,
          img: `${'https://scontent.fbkk9-2.fna.fbcdn.net/v/t39.30808-6/484470190_1055821353250916_123142960842644185_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGZ7CsVF_A7y9_YvvVyqs9wYuExC2Lz19Fi4TELYvPX0VOqaiZyNgr7nlj0Mbhyn1cKjqUMCyn3xc7P1pLO2D1-&_nc_ohc=HeI0va_PcD4Q7kNvgEjWM0L&_nc_oc=AdnD8xIu8KUJ-R-y_AxK3eKdpcBkfOOeiYSUJzm0BBdfXqxsCNTMmkKPq_DyGX32AEFLXK8CmHYdm297p5SliwY-&_nc_zt=23&_nc_ht=scontent.fbkk9-2.fna&_nc_gid=cpdmiVQgtdgZBNJICLQ0Ow&oh=00_AYFXOJ4CF8KwlbRkuo3Vsmv9WbLeiux8uU_QUXF5ytNGsw&oe=67EF16D0'}`,
        },
      ],
      district: 'สุขุมวิท',
      subDistrict: 'คลองตันเหนือ',
      subData: [
        {
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.6796372295776!2d100.57603399999999!3d13.7378355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29fa98a9d5429%3A0x840a0d52c80f8611!2sGLIG%20CAFE!5e0!3m2!1sen!2sth!4v1743326465626!5m2!1sen!2sth',
          address: '219 ซอย สุขุมวิท 49/13 แขวง คลองตันเหนือ เขตวัฒนา',
          open: 'จันทร์-อังคาร, พฤหัสบดี 09.00 - 18.00 น. / ศุกร์-อาทิตย์ 08.00 - 18.00 น. (ปิดวันอังคาร)',
          parking: '-',
          web: 'https://www.facebook.com/gliggligglig',
          refer: 'ภาพจาก ทรูไอดี ครีเอเตอร์ : pawangnittra',
          phone: ''
        }
      ]

    },
    {
      num: 7,
      title: "Summ coffee and studio",
      title_th: "ซัม คอฟฟี่ แอนด์ สตูดิโอ",
      img: `${'https://scontent.fbkk12-6.fna.fbcdn.net/v/t39.30808-6/481670230_2113159115771250_1869957954052485833_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHc7QYmaCA0pAKiXBN4MFsF9INkf6akogb0g2R_pqSiBlMryZocKYvpfLaiTRoUv64lPTxutXfRJyihlfCKBVbl&_nc_ohc=Asf_sIL9vvwQ7kNvgGewrg-&_nc_oc=Adlgh7yXodpGMjIs56kQx9EO7fPZLmaPTZnTfMTsCOKKdYfInObZGKIYYHoVZoixLjsvXoGh8DYeDFaGKmneEOq4&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&_nc_gid=wcdim_vUALOQAJqF0jmJAw&oh=00_AYG4j24Id2yVvmGE44sso112EJ0sPelo2sIbBzbpfchfkg&oe=67EEEFAA'}`,
      image: [
        {
          id: 1,
          img: `${'https://scontent.fbkk8-2.fna.fbcdn.net/v/t39.30808-6/466684385_17984968730758126_4898458409909605408_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFbBnCKDxt7syacoXFkuTzvG_Bb8FnG030b8FvwWcbTfavu22t-VclPbsrUweef-0rWL71lYeUnjPcVMXEcRnMV&_nc_ohc=18E_EuSIKZYQ7kNvgFoZnJL&_nc_oc=AdluIWICZ4Kp0mP5OW5x33KsDEs6EMRk0j1XDz3ow3iHZXZgFuE3zOoeOtLzY5RvEPgo5TwlkBXzsonjZbD3_weX&_nc_zt=23&_nc_ht=scontent.fbkk8-2.fna&_nc_gid=AV_WIJH4_WOPCspvx1DC5Q&oh=00_AYHNortZpWJmfuVll0EvvHWbFTsYAgl9b4zPhjn0OJCEEg&oe=67EF15E5'}`,
        },
        {
          id: 2,
          img: `${'https://scontent.fbkk8-2.fna.fbcdn.net/v/t39.30808-6/466407241_17984968904758126_7252528367440194956_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHqoay2UNuiXyN3vCAUVogvcqypBZtYoD1yrKkFm1igPZJNWcwkPAJfhCHH-vISFgdTIgf4bCy4-ifP_0I7HXLt&_nc_ohc=TOsd2Hfmp3UQ7kNvgG3m7g8&_nc_oc=Adkg4LDQuJe8gONY0EScp14ahrsf7tnVb2ly4qX0rVxGDDI6hVwba9CMsmajeB7sRpO3wNNknwV3y4Yz6cwms1Vu&_nc_zt=23&_nc_ht=scontent.fbkk8-2.fna&_nc_gid=UGQ76inNgVEUbbzFNe-sxQ&oh=00_AYHQvKkC6iZj8vP6zCxMbxBLOui4Y_c03EJeHYeXPQ4gbQ&oe=67EF28A5'}`,
        },
        {
          id: 3,
          img: `${'https://scontent.fbkk12-4.fna.fbcdn.net/v/t39.30808-6/466463800_17984968886758126_5664600476014467500_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHxKtURzl3ClYmnDyTw_UTFock4QDgjg3yhyThAOCODfO4b2vF9bP-fbXOMlHWePMygCG--w1zYR6omU99URKxt&_nc_ohc=rrns5Y2iTt4Q7kNvgFfm7aw&_nc_oc=AdnwhsLqFnHIQpL8QtFDfjW8jdCJgf4bO3lTvmDXisjxu1wwbSQB0tHtgpj5VxtQrK58csf3Q-TuU5ys-ltKlWkC&_nc_zt=23&_nc_ht=scontent.fbkk12-4.fna&_nc_gid=iHgDlSE1qbAuz62mhLDotg&oh=00_AYFSaKgFXYPPoc5LLFe6TubquqVu7s9E2jEIIutCzqGgIw&oe=67EF38E7'}`,
        },
        {
          id: 4,
          img: `${'https://scontent.fbkk12-2.fna.fbcdn.net/v/t39.30808-6/466850050_17984962055758126_453288994095189397_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFmmJRTmMdC3fconhcASN5ceXD1jrX2YYF5cPWOtfZhgWNQgD-LcZdc5ZVNQYC6vGasqWP53G3mDvnbWRKbdbFj&_nc_ohc=jwv4MGmFHggQ7kNvgEdyRuM&_nc_oc=AdlfDVu3AqSyQt3WgnscW-AWFwd-kyd-4Ug69UsFYOIzYBgKENW9-0S7Dnj5L0oU_0Jyu7GJ1-PMkjMkCh1ZF_Wh&_nc_zt=23&_nc_ht=scontent.fbkk12-2.fna&_nc_gid=eoNwWOWFR--4su70p2M1og&oh=00_AYFOw4p6iDNxQYii2batDQP3dT0-IhFgsmT9QRubpA-Daw&oe=67EF2002'}`,
        },
        {
          id: 5,
          img: `${'https://scontent.fbkk12-5.fna.fbcdn.net/v/t39.30808-6/481992775_622143843902293_4692308653971259276_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGWAMBNTwZLDu2ywrnr_Bft0oJe3qGG7s_Sgl7eoYbuzxE7Ih1qLvjr8D1p1jEIfD9n-Orfy8AY4KptD3HphYZG&_nc_ohc=bOl5E26GYrQQ7kNvgGe_cGd&_nc_oc=AdnvT8RQ6dYh60lwZOtWtyZjQeG552rnhCJn7B36anUE0y3V48f4g7FOCh5j2jkDj83lecN41U1reZUyfRDkb28D&_nc_zt=23&_nc_ht=scontent.fbkk12-5.fna&_nc_gid=eyLkoPZTXiBUgtDwB5PA0A&oh=00_AYFcDhIaoJAYgWaDr1ctJLTLnVmCktGCAAg4F0LwPXZAaQ&oe=67EF386F'}`,
        },
      ],
      district: 'พระโขนง',
      subDistrict: 'บางจาก',
      subData: [
        {
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.283685474742!2d100.60905177508931!3d13.701260686685362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f5e6da8c527%3A0x3ddaceb44bf05896!2ssumm%20coffee%20and%20studio!5e0!3m2!1sen!2sth!4v1744352625904!5m2!1sen!2sth',
          address: 'บ้านเลขที่ 163 ซอยสุขุมวิท 93 (ซอยพึ่งมี 16) แขวง บางจาก เขตพระโขนง กรุงเทพฯ',
          open: 'จันทร์-ศุกร์ 08.00 - 16.00 น. / เสาร์-อาทิตย์ 10.00 - 17.00 น. (ปิดวันอังคาร-พุธ)',
          parking: 'มีที่จอดรถ',
          web: 'https://www.facebook.com/summcoffeeandstudio/',
          refer: '-',
          phone: '062 375 8882'
        }
      ]

    },
    {
      num: 8,
      title: "CafeSlash ",
      title_th: "คาเฟ่สแลช",
      img: `${'https://lh3.googleusercontent.com/p/AF1QipOiKy7MD78GK4kyJXgCmF-sfPzGVR2EVYFpVhsg=s1360-w1360-h1020'}`,
      image: [
        {
          id: 1,
          img: `${'https://scontent.fbkk8-2.fna.fbcdn.net/v/t39.30808-6/481072189_561664346898564_1783860129070043516_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFb71B2hgNHGm7hVnfHuVzegtxxmF4fPGCC3HGYXh88YCUItxy1gpqP-vfO_BjOTdXcbrngcrMAgxPcvQ7Kiu_i&_nc_ohc=e8pTlNTEOMIQ7kNvgEIINhX&_nc_oc=AdmOC9q65Exz7xq_DPmsAR32HlcjTYKzO1BkdL3xLPA7qwU-H5KB2I5LMVb5Oy-Q8uSIwEdKVN6Mv02o0AE3HO9M&_nc_zt=23&_nc_ht=scontent.fbkk8-2.fna&_nc_gid=y-_AriPq0ORPoLQS2i_MJA&oh=00_AYH1o17k2SAwPL1DznwYZuErrJnevyEl7xjZzyZeJ-zyNg&oe=67EF2F0B'}`,
        },
        {
          id: 2,
          img: `${'https://scontent.fbkk12-2.fna.fbcdn.net/v/t51.75761-15/486492908_17900551140118305_2619469663057081624_n.jpg?stp=dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG0Tgl9S6xkhylFz-OL0z7pJvfCrLq6oKUm98KsurqgpVuTVHrfODefTyw6Dg6Yg-yjgNcjcESiiVlzU1bs44GG&_nc_ohc=eaIOoyoz9SAQ7kNvgF1Z8d9&_nc_oc=AdmC_HQmLH9clabFewW6eqJYj4R4IWgAi76I2V1ddTLNVH_kqI54csdJfI1uK319NyNTp6EvYjjO5q9jyqyjwMqj&_nc_zt=23&_nc_ht=scontent.fbkk12-2.fna&_nc_gid=qPWpnthTvdTQpFg2xcUuKw&oh=00_AYFRAPDmFSR1OjknOjAXsuP9bB9OKVnWo8wfH1XtNQ-pnw&oe=67EF3190'}`,
        },
        {
          id: 3,
          img: `${'https://scontent.fbkk12-5.fna.fbcdn.net/v/t51.75761-15/483926172_17946982304952157_5920824732244410741_n.jpg?stp=dst-jpegr_p526x296_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHgTzc-LkyMP4HZyS7h7aQjqbAN92dOO7SpsA33Z047tCU50JyDtHiqDYoPKl3idVIHVOjD5o2YXSRJL9a7HNDm&_nc_ohc=nUOmWxWuwOgQ7kNvgEbkcAc&_nc_oc=Adme8Cc4Z8pGwvbxamL4k9bMRQV63TbMtCzXRKAZlJQbphDhmJlxv2YH32c7uuTFi4ecvo2iI1bojhtvTay93QVk&_nc_zt=23&se=-1&_nc_ht=scontent.fbkk12-5.fna&_nc_gid=pTyQ52sH0I_5gtA19uYs6w&oh=00_AYH8ZJlh0YJKOxaYCxmwUrq7HQSFWr6kmX1TwYdNMZC5Tw&oe=67EF3BEC'}`,
        },
        {
          id: 4,
          img: `${'https://scontent.fbkk12-3.fna.fbcdn.net/v/t51.75761-15/483227211_17946357755952157_672699371627901765_n.jpg?stp=dst-jpegr_p526x296_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeElE5tRkPUhoG4n1uuvZdTGdcbsHHZXZWR1xuwcdldlZE3nxC0_JZVl9fmXygIs9BnttjligN7F12UsFcX8asO9&_nc_ohc=OQfFa7c10AEQ7kNvgFZJMCY&_nc_oc=AdlurEOuWCSnTQzWGxvLNv0Ktf-SUUCyNHG9qOHxBiLdJcix4j2mCbMQMCMzFJ3PFACvnVTuTan0V4uqwVtG7B0X&_nc_zt=23&se=-1&_nc_ht=scontent.fbkk12-3.fna&_nc_gid=JOXt7nv4aoj2fl3iZnboOg&oh=00_AYGEEgo7KkScXScDmXcSGijINOebG6E06Ryv1hmGdMYm6A&oe=67EF3DC0'}`,
        },
        {
          id: 5,
          img: `${'https://scontent.fbkk13-1.fna.fbcdn.net/v/t51.75761-15/481311657_17945168885952157_9195236113480217237_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHdECw-OLJJt_hDQgv9lNQGyMS_-TLscl_IxL_5MuxyX8B0buwyA9yP_W1g7I6zBgkv0k1XYNtDWcETQeOXwfFZ&_nc_ohc=LbpFflJjVKsQ7kNvgF_pQZu&_nc_oc=AdmNRybmuoP8CG9ZpayRVHm8bmUzSFsnLqJyrw4B9DZF0AZOdr2gka3Kk3wv7dSBcRZH9hL6_d-0NICDZ7WVZSVs&_nc_zt=23&_nc_ht=scontent.fbkk13-1.fna&_nc_gid=UJw3819mOuMPIW5PpeaLZA&oh=00_AYEYE0bFNa3T262B4MPJQXaRmpVrSojXAyY4jVe5DWeimw&oe=67EF4691'}`,
        },
      ],
      district: 'จตุจักร',
      subDistrict: 'ลาดยาว',
      subData: [
        {
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.7223080697313!2d100.599006175091!3d13.795606486600837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29dae7ff3b04d%3A0x156f1b9c9b0fd5cd!2zQ2FmZVNsYXNoIC8g4LiE4Liy4LmA4Lif4LmI4Liq4LmB4Lil4LiK!5e0!3m2!1sen!2sth!4v1744352697052!5m2!1sen!2sth',
          address: '23 ซอย เทศบาลรังสรรใต้ แขวงลาดยาว เขตจตุจักร กรุงเทพฯ',
          open: 'จันทร์-พุธ, ศุกร์ 08.00 - 17.00 น. / เสาร์-อาทิตย์ 09.00 - 18.00 น. (ปิดพฤหัสบดี)',
          parking: 'จอดรถริมถนน',
          web: 'https://www.facebook.com/novcoffeebar/',
          refer: 'เพจ โน่น นั่น นี่  IG : nonnunnee.ig',
          phone: ''
        }
      ]

    },
    {
      num: 9,
      title: "Homy in the backyard",
      title_th: "โฮมี่อินดิแบล็คยาด",
      img: `${'https://lh3.googleusercontent.com/p/AF1QipORqoO819QbC-1slUrAuWLpX7G_ktpawzn9HQxV=s1360-w1360-h1020'}`,
      image: [
        {
          id: 1,
          img: `${'https://lh3.googleusercontent.com/p/AF1QipORqoO819QbC-1slUrAuWLpX7G_ktpawzn9HQxV=s1360-w1360-h1020'}`,
        },
        {
          id: 2,
          img: `${'https://scontent.fbkk12-4.fna.fbcdn.net/v/t51.75761-15/481336829_18263945134287754_1827840132112945764_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEcgeAlqUzgEKRFoX3w9RyA06s7SuWwlf_TqztK5bCV_5-CCHlOR-qZXBT6w3BYmUmzc9ojUAPJRXYIhFu17Jtk&_nc_ohc=ZUNYAJfqBuIQ7kNvgFeq6xq&_nc_oc=Adk6d-cSBro-_pmBedAv8WMtH9X-niZb_CZ-kHsN76aoBRFOdGxk-N6NueBrWanhdQafk2P0UDwSJV3U_lwB5bjO&_nc_zt=23&_nc_ht=scontent.fbkk12-4.fna&_nc_gid=qIWbymSsdYeT9OnKkwfssw&oh=00_AYGoMuQg7W2t21ts0qgWjgRtGwVNgQzLZJnocCMjBf7xeg&oe=67EF4B32'}`,
        },
        {
          id: 3,
          img: `${'https://scontent.fbkk13-2.fna.fbcdn.net/v/t51.75761-15/474253673_18259942768287754_1329934576664377225_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGo6BZ5MJZtER7rGY6eMVf9tNcATP7grjm01wBM_uCuORS8sUa640DPMF8WnWxAUfjYiiy1C_AML5BWYF8aU2PB&_nc_ohc=DcTB_6ydpVYQ7kNvgGrzMsc&_nc_oc=AdkdRX2omnQ-bemC4vDCPmnh99zeeEKGKI-w7qG6_Jmntp2_wrPoG2fZ7xlmt02Xp_B-n0L8r4bzMNTFOreMf_pD&_nc_zt=23&_nc_ht=scontent.fbkk13-2.fna&_nc_gid=sNCPn6EwS4uICJ-JNNwa_w&oh=00_AYHly4gba2SMy3ZclvsQVnEvBZUPsUIDNO_dB8P_DVNYiQ&oe=67EF1A59'}`,
        },
      ],
      district: 'ท่าแร้ง',
      subDistrict: 'บางเขน',
      subData: [
        {
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.466815842208!2d100.62701127485825!3d13.871012786533448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d7d2039cdc217%3A0x5a313b6c920e99be!2sHomy%20in%20the%20backyard!5e0!3m2!1sen!2sth!4v1743347741604!5m2!1sen!2sth',
          address: '25 สุขาภิบาล 5 ซอย 5 แยก 19 ท่าแร้ง กรุงเทพฯ',
          open: 'วันพุธ 09.00-17.00, วันศุกร์ 09.30 - 17.00 น. / วันเสาร์-วันอาทิตย์ 09.00 - 17.00 น. (ปิดวันจันทร์, วันอังคาร, แลวันพฤหัสบดี)',
          parking: '',
          web: 'https://www.facebook.com/homyinthebackyard/',
          refer: '',
          phone: ''
        }
      ]
    },
  ];
  const [isClear, setIsClear] = useState(false);
  const [filteredData, setFilteredData] = useState(dataCom);
  const [searchTerm, setSearchTerm] = useState("");
  const [districtQuery, setDistrictQuery] = useState(''); // เก็บค่า districtQuery
  const [filteredDistrict, setFilteredDistrict] = useState([]);

  useEffect(() => {
    setSelectedButton('Bangkok');
    setSearchTerm('')
    setFilteredData(dataCom)
    setDistrictQuery('')
    setFilteredDistrict([])
  }, [isClear]);

  useEffect(() => {
    if (districtQuery) {
      onSearchDistrict(districtQuery)
    }
  }, [districtQuery])

  useEffect(() => {
    onSearchDistrict(districtQuery);
  }, [districtQuery]);


  const onSearchDistrict = (input) => {
    const filtered = dataCom.filter(
      (item) =>
        item.district && item.district.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredDistrict(filtered);
  };

  const handleDistrictQueryChange = (query) => {
    setDistrictQuery(query);
    onSearchDistrict(query);
  };

  const onSearch = (input) => {
    setSearchTerm(input);
    const filtered = dataCom.filter(
      (item) =>
        (item.title && item.title.toLowerCase().includes(input.toLowerCase())) ||
        (item.title_th && item.title_th.toLowerCase().includes(input.toLowerCase()))
    );
    setFilteredData(filtered);

  };

  const navigate = useNavigate();

  const goTo = (d) => {
    navigate('/communities/cafe/details', { state: { data: d } });
  };

  const onRefresh = () => {
    setIsClear(!isClear);
    setFilteredDistrict([])
  };

  const province = [
    {
      value: "Bangkok",
      label: "กรุงเทพมหานคร",
    },
    {
      value: "Chonburi",
      label: "ชลบุรี",
    },
  ];

  const [selectedProvince, setSelectedProvince] = useState(null); // กำหนดค่าเริ่มต้นให้เป็นกรุงเทพมหานคร

  const [selectedButton, setSelectedButton] = useState("");
  const handleChange = (selectedOption) => {
    setSelectedProvince(selectedOption); // เก็บค่าเมื่อมีการเลือกจังหวัด
  };

  const onBtnGroup = (d) => {
    setSelectedButton(d.value);
    handleChange(d.value);
  };


  return (
    <div className="p-5 ">
      {" "}
      <div className="d-flex justify-content-end gap-2 mb-2">
        <ButtonGroup>
          {province.map((d, i) => (
            <Button
              key={i}
              variant={`${selectedButton === d.value ? "warning" : "light"}`}
              onClick={() => onBtnGroup(d)}
            >
              {d.value}
            </Button>
          ))}
        </ButtonGroup>
        <Button className="border-0 p-2 bg-warning" onClick={onRefresh}>
          <IoMdRefresh />
        </Button>
      </div>
      <AutoSuggest
        onDistrictQueryChange={handleDistrictQueryChange}
        isClear={isClear}
        selectedProvince={selectedProvince}
      />
      <div className="pb-1 pt-5">
        <Form.Control
          className="w-100"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => {
            onSearch(e.target.value);
          }}
        />{" "}
      </div>
      <div className="d-flex flex-wrap justify-content-center pt-4 col-12 gap-4">
        {filteredData.length > 0 && filteredDistrict.length === 0 ? (
          filteredData.map((d, i) => (
            <span
              key={i}
              className="box-item pointer-events col-2 p-2"
              onClick={() => goTo(d)}
            >
              <Image src={d.img} className="box-img" />
              <p className="box-text mt-2 text-center">{d.title}</p>
            </span>
          ))
        ) : filteredDistrict.length > 0 ? (
          filteredDistrict.map((d, i) => (
            <span
              key={i}
              className="box-item pointer-events col-2 p-2"
              onClick={() => goTo(d)}
            >
              <Image src={d.img} className="box-img" />
              <p className="box-text mt-2 text-center">{d.title}</p>
            </span>
          ))
        ) : (
          <p>ไม่พบข้อมูลที่ค้นหา</p>
        )}

      </div>
    </div>
  );
}

export default Cafe;

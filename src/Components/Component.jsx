import React, { useEffect, useState, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement



const Component = ({
  
  image1 = images.image1,
  image2 = images.image2,
  image3 = images.image3,
  image4 = images.image4,
  image5 = images.image5,
  image6 = images.image6,
  image7 = images.image7,
  image8 = images.image8,
  image9 = images.image9,
  image10 = images.image10,
  image11 = images.image11,
  image12 = images.image12,
  image13 = images.image13,
  image14 = images.image14,
  image15 = images.image15,
  image16 = images.image16,
  image17 = images.image17,
  image18 = images.image18,
  image19 = images.image19,
  text1 = texts.text1,
  text2 = texts.text2,
  text3 = texts.text3,
  text4 = texts.text4,
  text5 = texts.text5,
  text6 = texts.text6,
  text7 = texts.text7,
  text8 = texts.text8,
  text9 = texts.text9,
  text10 = texts.text10,
  text11 = texts.text11,
  text12 = texts.text12,
  text13 = texts.text13,
  text14 = texts.text14,
  text15 = texts.text15,
  text16 = texts.text16,
  text17 = texts.text17,
  text18 = texts.text18,
  text19 = texts.text19,
  text20 = texts.text20,
  text21 = texts.text21,
  text22 = texts.text22,
  text23 = texts.text23,
  text24 = texts.text24,
  text25 = texts.text25,
  text26 = texts.text26,
  text27 = texts.text27,
  text28 = texts.text28,
  text29 = texts.text29,
  text30 = texts.text30,
  text31 = texts.text31,
  text32 = texts.text32,
  text33 = texts.text33,
  text34 = texts.text34,
  text35 = texts.text35,
  text36 = texts.text36,
  text37 = texts.text37,
  text38 = texts.text38,
  text39 = texts.text39,
  text40 = texts.text40,
  text41 = texts.text41,
  text42 = texts.text42,
  text43 = texts.text43,
  text44 = texts.text44,
  text45 = texts.text45,
  text46 = texts.text46,
  text47 = texts.text47,
  text48 = texts.text48,
  text49 = texts.text49,
  text50 = texts.text50,
  text51 = texts.text51,
  text52 = texts.text52,
  text53 = texts.text53,
  text54 = texts.text54,
  text55 = texts.text55,
  text56 = texts.text56,
  text57 = texts.text57,
  text58 = texts.text58,
  text59 = texts.text59,
  text60 = texts.text60,
  text61 = texts.text61,
  text62 = texts.text62,
  text63 = texts.text63,
  text64 = texts.text64,
  text65 = texts.text65,
  text66 = texts.text66,
  text67 = texts.text67,
  text68 = texts.text68,
  text69 = texts.text69,
  text70 = texts.text70,
  text71 = texts.text71,
  text72 = texts.text72,
  text73 = texts.text73,
  text74 = texts.text74,
  text75 = texts.text75,
  text76 = texts.text76,
  text77 = texts.text77,
  text78 = texts.text78,
  text79 = texts.text79,
  text80 = texts.text80,
  text81 = texts.text81,
  text82 = texts.text82,
  text83 = texts.text83,
  text84 = texts.text84,
  text85 = texts.text85,
  text86 = texts.text86,
  text87 = texts.text87,
  text88 = texts.text88,
  text89 = texts.text89,
  text90 = texts.text90,
  text91 = texts.text91,
  text92 = texts.text92,
  text93 = texts.text93,
  text94 = texts.text94,
  text95 = texts.text95,
  text96 = texts.text96,
  text97 = texts.text97,
  text98 = texts.text98,
  text99 = texts.text99,
  text100 = texts.text100,
  text101 = texts.text101,
  text102 = texts.text102,
  text103 = texts.text103,
  text104 = texts.text104,
  text105 = texts.text105,
  text106 = texts.text106,
  text107 = texts.text107,
  text108 = texts.text108,
  text109 = texts.text109,
  text110 = texts.text110,
  text111 = texts.text111,
  text112 = texts.text112,
  text113 = texts.text113,
  text114 = texts.text114,
  text115 = texts.text115,
  text116 = texts.text116,
  text117 = texts.text117,
  text118 = texts.text118,
  text119 = texts.text119,
  text120 = texts.text120,
  text121 = texts.text121,
  text122 = texts.text122,
  text123 = texts.text123,
  text124 = texts.text124,
  text125 = texts.text125,
  text126 = texts.text126,
  text127 = texts.text127,
  text128 = texts.text128,
  text129 = texts.text129,
  text130 = texts.text130,
  text131 = texts.text131,
  text132 = texts.text132,
  text133 = texts.text133,
  text134 = texts.text134,
  text135 = texts.text135,
  text136 = texts.text136,
  text137 = texts.text137,
  text138 = texts.text138,
  text139 = texts.text139,
  text140 = texts.text140,
  text141 = texts.text141,
  text142 = texts.text142,
  text143 = texts.text143,
  text144 = texts.text144,
  text145 = texts.text145,
  text146 = texts.text146,
  text147 = texts.text147,
  text148 = texts.text148,
  text149 = texts.text149,
  text150 = texts.text150,
  text151 = texts.text151,
  text152 = texts.text152,
  text153 = texts.text153,
  text154 = texts.text154,
  text155 = texts.text155,
  text156 = texts.text156,
  text157 = texts.text157,
  text158 = texts.text158,
  text159 = texts.text159,
  text160 = texts.text160,
  text161 = texts.text161,
  text162 = texts.text162,
  text163 = texts.text163,
  text164 = texts.text164,
  text165 = texts.text165,
  text166 = texts.text166,
  text167 = texts.text167,
}) => {
  return (
    <div className="wrapper-div-34914 ">
      <div className=" home-34914">
        {/* Frame 91 */}
        <section className=" frame-9-34915 pos-abs">
          <div className=" frame-1006-34916 pos-abs">
            <div className=" valuetainmentlo-34917">
              <div className=" vector-34918 pos-abs">
                <div className="nodeBg-34918 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34919 pos-abs">
                <div className="nodeBg-34919 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34920 pos-abs">
                <div className="nodeBg-34920 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34921 pos-abs">
                <div className="nodeBg-34921 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34922 pos-abs">
                <div className="nodeBg-34922 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34923 pos-abs">
                <div className="nodeBg-34923 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34924 pos-abs">
                <div className="nodeBg-34924 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34925 pos-abs">
                <div className="nodeBg-34925 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34926 pos-abs">
                <div className="nodeBg-34926 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34927 pos-abs">
                <div className="nodeBg-34927 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34928 pos-abs">
                <div className="nodeBg-34928 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34929 pos-abs">
                <div className="nodeBg-34929 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34930 pos-abs">
                <div className="nodeBg-34930 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34931 pos-abs">
                <div className="nodeBg-34931 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34932 pos-abs">
                <div className="nodeBg-34932 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34933 pos-abs">
                <div className="nodeBg-34933 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34934 pos-abs">
                <div className="nodeBg-34934 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34935 pos-abs">
                <div className="nodeBg-34935 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34936 pos-abs">
                <div className="nodeBg-34936 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34937 pos-abs">
                <div className="nodeBg-34937 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34938 pos-abs">
                <div className="nodeBg-34938 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34939 pos-abs">
                <div className="nodeBg-34939 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34940 pos-abs">
                <div className="nodeBg-34940 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34941 pos-abs">
                <div className="nodeBg-34941 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34942 pos-abs">
                <div className="nodeBg-34942 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34943 pos-abs">
                <div className="nodeBg-34943 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34944 pos-abs">
                <div className="nodeBg-34944 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34945 pos-abs">
                <div className="nodeBg-34945 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34946 pos-abs">
                <div className="nodeBg-34946 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34947 pos-abs">
                <div className="nodeBg-34947 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34948 pos-abs">
                <div className="nodeBg-34948 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34949 pos-abs">
                <div className="nodeBg-34949 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34950 pos-abs">
                <div className="nodeBg-34950 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34951 pos-abs">
                <div className="nodeBg-34951 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34952 pos-abs">
                <div className="nodeBg-34952 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34953 pos-abs">
                <div className="nodeBg-34953 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34954 pos-abs">
                <div className="nodeBg-34954 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34955 pos-abs">
                <div className="nodeBg-34955 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34956 pos-abs">
                <div className="nodeBg-34956 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34957 pos-abs">
                <div className="nodeBg-34957 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34958 pos-abs">
                <div className="nodeBg-34958 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34959 pos-abs">
                <div className="nodeBg-34959 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34960 pos-abs">
                <div className="nodeBg-34960 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34961 pos-abs">
                <div className="nodeBg-34961 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-34962 pos-abs">
                <div className="nodeBg-34962 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
            </div>
            <div className=" vtmerch-34963">
              <span className="vtmerch-34963-0 ">{text1}</span>
            </div>
          </div>
          <div className=" menu-5-1-34964 pos-abs">
            <div className=" vector-34965 pos-abs">
              <div className="nodeBg-34965 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-34966 pos-abs">
              <div className="nodeBg-34966 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-34967 pos-abs">
              <div className="nodeBg-34967 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>
          <div className=" future-looks-br-34968 pos-abs">
            <span className="future-looks-br-34968-0 ">{text2}</span>
          </div>
          <div className=" frame-85-34969 pos-abs">
            <div className=" frame-1008-34970">
              <div className=" frame-95-34971">
                <div
                  className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-34971 "
                  id="id-bg-34971"
                >
                  {" "}
                </div>
                <div className=" frame-87-34972">
                  <div className=" frame-33-34973 pos-abs">
                    <div className=" new-34974">
                      <span className="new-34974-0 ">{text3}</span>
                    </div>
                  </div>
                  <div className=" frame-86-34975"></div>
                  <div className=" frame-83-34976">
                    <div className=" frame-33-34977">
                      <div className=" add-to-cart-34978">
                        <span className="add-to-cart-34978-0 ">{text4}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" frame-75-34979">
                <div className=" frame-73-34980">
                  <div className=" army-green-acti-34981">
                    <span className="army-green-acti-34981-0 ">{text5}</span>
                  </div>
                  <div className=" frame-1007-34982">
                    <div className=" frame-20-34983">
                      <div className=" c-3495-34984">
                        <span className="c-3495-34984-0 ">{text6}</span>
                      </div>
                    </div>
                    <div className=" frame-19-34985">
                      <div className=" group-228-34986">
                        <div className=" frame-1006-34987 pos-abs">
                          <div className=" c-3495-34988">
                            <span className="c-3495-34988-0 ">{text7}</span>
                          </div>
                        </div>
                        <div className=" line-5-34989 pos-abs"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" frame-1012-34990">
              <div className=" frame-95-34991">
                <div
                  className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-34991 "
                  id="id-bg-34991"
                >
                  {" "}
                </div>
                <div className=" frame-87-34992">
                  <div className=" frame-87-34993 pos-abs">
                    <div className=" new-34994">
                      <span className="new-34994-0 ">{text8}</span>
                    </div>
                  </div>
                  <div className=" frame-86-34995"></div>
                  <div className=" frame-83-34996">
                    <div className=" frame-33-34997">
                      <div className=" add-to-cart-34998">
                        <span className="add-to-cart-34998-0 ">{text9}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" frame-75-34999">
                <div className=" frame-73-341000">
                  <div className=" army-green-acti-341001">
                    <span className="army-green-acti-341001-0 ">{text10}</span>
                  </div>
                  <div className=" frame-1007-341002">
                    <div className=" frame-20-341003">
                      <div className=" c-3495-341004">
                        <span className="c-3495-341004-0 ">{text11}</span>
                      </div>
                    </div>
                    <div className=" frame-19-341005">
                      <div className=" group-228-341006">
                        <div className=" frame-1006-341007 pos-abs">
                          <div className=" c-3495-341008">
                            <span className="c-3495-341008-0 ">{text12}</span>
                          </div>
                        </div>
                        <div className=" line-5-341009 pos-abs"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" frame-1015-341010">
              <div className=" frame-95-341011">
                <div
                  className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-341011 "
                  id="id-bg-341011"
                >
                  {" "}
                </div>
                <div className=" frame-87-341012">
                  <div className=" frame-87-341013 pos-abs">
                    <div className=" new-341014">
                      <span className="new-341014-0 ">{text13}</span>
                    </div>
                  </div>
                  <div className=" frame-86-341015"></div>
                  <div className=" frame-83-341016">
                    <div className=" frame-33-341017">
                      <div className=" add-to-cart-341018">
                        <span className="add-to-cart-341018-0 ">{text14}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" frame-75-341019">
                <div className=" frame-73-341020">
                  <div className=" army-green-acti-341021">
                    <span className="army-green-acti-341021-0 ">{text15}</span>
                  </div>
                  <div className=" frame-1007-341022">
                    <div className=" frame-20-341023">
                      <div className=" c-3495-341024">
                        <span className="c-3495-341024-0 ">{text16}</span>
                      </div>
                    </div>
                    <div className=" frame-19-341025">
                      <div className=" group-228-341026">
                        <div className=" frame-1006-341027 pos-abs">
                          <div className=" c-3495-341028">
                            <span className="c-3495-341028-0 ">{text17}</span>
                          </div>
                        </div>
                        <div className=" line-5-341029 pos-abs"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" frame-1014-341030">
              <div className=" frame-95-341031">
                <div
                  className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-341031 "
                  id="id-bg-341031"
                >
                  {" "}
                </div>
                <div className=" frame-87-341032">
                  <div className=" frame-87-341033 pos-abs">
                    <div className=" new-341034">
                      <span className="new-341034-0 ">{text18}</span>
                    </div>
                  </div>
                  <div className=" frame-86-341035"></div>
                  <div className=" frame-83-341036">
                    <div className=" frame-33-341037">
                      <div className=" add-to-cart-341038">
                        <span className="add-to-cart-341038-0 ">{text19}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" frame-75-341039">
                <div className=" frame-73-341040">
                  <div className=" army-green-acti-341041">
                    <span className="army-green-acti-341041-0 ">{text20}</span>
                  </div>
                  <div className=" frame-1007-341042">
                    <div className=" frame-20-341043">
                      <div className=" c-3495-341044">
                        <span className="c-3495-341044-0 ">{text21}</span>
                      </div>
                    </div>
                    <div className=" frame-19-341045">
                      <div className=" group-228-341046">
                        <div className=" frame-1006-341047 pos-abs">
                          <div className=" c-3495-341048">
                            <span className="c-3495-341048-0 ">{text22}</span>
                          </div>
                        </div>
                        <div className=" line-5-341049 pos-abs"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" frame-1013-341050">
              <div className=" frame-95-341051">
                <div
                  className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-341051 "
                  id="id-bg-341051"
                >
                  {" "}
                </div>
                <div className=" frame-87-341052">
                  <div className=" frame-87-341053 pos-abs">
                    <div className=" new-341054">
                      <span className="new-341054-0 ">{text23}</span>
                    </div>
                  </div>
                  <div className=" frame-86-341055"></div>
                  <div className=" frame-83-341056">
                    <div className=" frame-33-341057">
                      <div className=" add-to-cart-341058">
                        <span className="add-to-cart-341058-0 ">{text24}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" frame-75-341059">
                <div className=" frame-73-341060">
                  <div className=" army-green-acti-341061">
                    <span className="army-green-acti-341061-0 ">{text25}</span>
                  </div>
                  <div className=" frame-1007-341062">
                    <div className=" frame-20-341063">
                      <div className=" c-3495-341064">
                        <span className="c-3495-341064-0 ">{text26}</span>
                      </div>
                    </div>
                    <div className=" frame-19-341065">
                      <div className=" group-228-341066">
                        <div className=" frame-1006-341067 pos-abs">
                          <div className=" c-3495-341068">
                            <span className="c-3495-341068-0 ">{text27}</span>
                          </div>
                        </div>
                        <div className=" line-5-341069 pos-abs"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Group 11 */}
        <section className=" group-1-341070 pos-abs">
          <div className=" frame-4-341071 pos-abs">
            <div className=" frame-6-341072 pos-abs">
              <div className=" future-looks-br-341073">
                <span className="future-looks-br-341073-0 ">{text28}</span>
              </div>
              <div className=" asterisk-4-341074">
                <div className=" group-341075 pos-abs">
                  <div className=" vector-341076 pos-abs">
                    <div className="nodeBg-341076 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>
              <div className=" future-looks-br-341077">
                <span className="future-looks-br-341077-0 ">{text29}</span>
              </div>
              <div className=" asterisk-1-341078">
                <div className=" group-341079 pos-abs">
                  <div className=" vector-341080 pos-abs">
                    <div className="nodeBg-341080 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>
              <div className=" future-looks-br-341081">
                <span className="future-looks-br-341081-0 ">{text30}</span>
              </div>
              <div className=" asterisk-3-341082">
                <div className=" group-341083 pos-abs">
                  <div className=" vector-341084 pos-abs">
                    <div className="nodeBg-341084 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>
              <div className=" future-looks-br-341085">
                <span className="future-looks-br-341085-0 ">{text31}</span>
              </div>
              <div className=" asterisk-2-341086">
                <div className=" group-341087 pos-abs">
                  <div className=" vector-341088 pos-abs">
                    <div className="nodeBg-341088 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>
              <div className=" future-looks-br-341089">
                <span className="future-looks-br-341089-0 ">{text32}</span>
              </div>
            </div>
          </div>
        </section>
        {/* Frame 1041 */}
        <section className=" frame-104-341090 pos-abs">
          <div className=" group-205-341091 pos-abs">
            <div className=" frame-94-341092 pos-abs">
              <div className=" frame-41-341093">
                <div className=" buy-1-get-1-fre-341094">
                  <span className="buy-1-get-1-fre-341094-0 ">{text33}</span>
                  <span className="buy-1-get-1-fre-341094-1 ">{text34}</span>
                  <span className="buy-1-get-1-fre-341094-2 ">{text35}</span>
                  <span className="buy-1-get-1-fre-341094-3 ">{text36}</span>
                  <span className="buy-1-get-1-fre-341094-4 ">{text37}</span>
                </div>
              </div>
              <div className=" frame-86-341095">
                <div className=" frame-1008-341096">
                  <div className=" frame-95-341097">
                    <div className=" frame-87-341098">
                      <div
                        className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-341098 "
                        id="id-bg-341098"
                      >
                        {" "}
                      </div>
                      <div className=" frame-86-341099"></div>
                      <div className=" frame-83-341100">
                        <div className=" frame-33-341101">
                          <div className=" add-to-cart-341102">
                            <span className="add-to-cart-341102-0 ">
                              {text38}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" frame-96-341103 pos-abs">
                    <div className=" frame-73-341104">
                      <div className=" army-green-acti-341105">
                        <span className="army-green-acti-341105-0 ">
                          {text39}
                        </span>
                      </div>
                      <div className=" frame-1007-341106">
                        <div className=" frame-20-341107">
                          <div className=" c-3495-341108">
                            <span className="c-3495-341108-0 ">{text40}</span>
                          </div>
                        </div>
                        <div className=" frame-19-341109">
                          <div className=" group-228-341110">
                            <div className=" frame-1006-341111 pos-abs">
                              <div className=" c-3495-341112">
                                <span className="c-3495-341112-0 ">
                                  {text41}
                                </span>
                              </div>
                            </div>
                            <div className=" line-5-341113 pos-abs"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" frame-1021-341114">
                  <div className=" frame-95-341115">
                    <div className=" frame-87-341116">
                      <div
                        className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-341116 "
                        id="id-bg-341116"
                      >
                        {" "}
                      </div>
                      <div className=" frame-86-341117"></div>
                      <div className=" frame-83-341118">
                        <div className=" frame-33-341119">
                          <div className=" add-to-cart-341120">
                            <span className="add-to-cart-341120-0 ">
                              {text42}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" frame-96-341121 pos-abs">
                    <div className=" frame-73-341122">
                      <div className=" army-green-acti-341123">
                        <span className="army-green-acti-341123-0 ">
                          {text43}
                        </span>
                      </div>
                      <div className=" frame-1007-341124">
                        <div className=" frame-20-341125">
                          <div className=" c-3495-341126">
                            <span className="c-3495-341126-0 ">{text44}</span>
                          </div>
                        </div>
                        <div className=" frame-19-341127">
                          <div className=" group-228-341128">
                            <div className=" frame-1006-341129 pos-abs">
                              <div className=" c-3495-341130">
                                <span className="c-3495-341130-0 ">
                                  {text45}
                                </span>
                              </div>
                            </div>
                            <div className=" line-5-341131 pos-abs"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" frame-1022-341132">
                  <div className=" frame-95-341133">
                    <div className=" frame-87-341134">
                      <div
                        className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-341134 "
                        id="id-bg-341134"
                      >
                        {" "}
                      </div>
                      <div className=" frame-86-341135"></div>
                      <div className=" frame-83-341136">
                        <div className=" frame-33-341137">
                          <div className=" add-to-cart-341138">
                            <span className="add-to-cart-341138-0 ">
                              {text46}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" frame-96-341139 pos-abs">
                    <div className=" frame-73-341140">
                      <div className=" army-green-acti-341141">
                        <span className="army-green-acti-341141-0 ">
                          {text47}
                        </span>
                      </div>
                      <div className=" frame-1007-341142">
                        <div className=" frame-20-341143">
                          <div className=" c-3495-341144">
                            <span className="c-3495-341144-0 ">{text48}</span>
                          </div>
                        </div>
                        <div className=" frame-19-341145">
                          <div className=" group-228-341146">
                            <div className=" frame-1006-341147 pos-abs">
                              <div className=" c-3495-341148">
                                <span className="c-3495-341148-0 ">
                                  {text49}
                                </span>
                              </div>
                            </div>
                            <div className=" line-5-341149 pos-abs"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" frame-1023-341150">
                  <div className=" frame-95-341151">
                    <div className=" frame-87-341152">
                      <div
                        className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-341152 "
                        id="id-bg-341152"
                      >
                        {" "}
                      </div>
                      <div className=" frame-86-341153"></div>
                      <div className=" frame-83-341154">
                        <div className=" frame-33-341155">
                          <div className=" add-to-cart-341156">
                            <span className="add-to-cart-341156-0 ">
                              {text50}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" frame-96-341157 pos-abs">
                    <div className=" frame-73-341158">
                      <div className=" army-green-acti-341159">
                        <span className="army-green-acti-341159-0 ">
                          {text51}
                        </span>
                      </div>
                      <div className=" frame-1007-341160">
                        <div className=" frame-20-341161">
                          <div className=" c-3495-341162">
                            <span className="c-3495-341162-0 ">{text52}</span>
                          </div>
                        </div>
                        <div className=" frame-19-341163">
                          <div className=" group-228-341164">
                            <div className=" frame-1006-341165 pos-abs">
                              <div className=" c-3495-341166">
                                <span className="c-3495-341166-0 ">
                                  {text53}
                                </span>
                              </div>
                            </div>
                            <div className=" line-5-341167 pos-abs"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Frame 1481 */}
        <section className=" frame-148-341168 pos-abs">
          <div className=" group-206-341169 pos-abs">
            <div className=" frame-94-341170 pos-abs">
              <div className=" frame-41-341171">
                <div className=" new-arrival-341172">
                  <span className="new-arrival-341172-0 ">{text54}</span>
                </div>
              </div>
              <div className=" frame-87-341173">
                <div className=" frame-1008-341174">
                  <div className=" frame-95-341175">
                    <div className=" frame-87-341176">
                      <div
                        className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-341176 "
                        id="id-bg-341176"
                      >
                        {" "}
                      </div>
                      <div className=" frame-86-341177"></div>
                      <div className=" frame-83-341178">
                        <div className=" frame-33-341179">
                          <div className=" add-to-cart-341180">
                            <span className="add-to-cart-341180-0 ">
                              {text55}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" frame-96-341181 pos-abs">
                    <div className=" frame-73-341182">
                      <div className=" army-green-acti-341183">
                        <span className="army-green-acti-341183-0 ">
                          {text56}
                        </span>
                      </div>
                      <div className=" frame-1007-341184">
                        <div className=" frame-20-341185">
                          <div className=" c-3495-341186">
                            <span className="c-3495-341186-0 ">{text57}</span>
                          </div>
                        </div>
                        <div className=" frame-19-341187">
                          <div className=" group-228-341188">
                            <div className=" frame-1006-341189 pos-abs">
                              <div className=" c-3495-341190">
                                <span className="c-3495-341190-0 ">
                                  {text58}
                                </span>
                              </div>
                            </div>
                            <div className=" line-5-341191 pos-abs"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" frame-1021-341192">
                  <div className=" frame-95-341193">
                    <div className=" frame-87-341194">
                      <div
                        className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-341194 "
                        id="id-bg-341194"
                      >
                        {" "}
                      </div>
                      <div className=" frame-86-341195"></div>
                      <div className=" frame-83-341196">
                        <div className=" frame-33-341197">
                          <div className=" add-to-cart-341198">
                            <span className="add-to-cart-341198-0 ">
                              {text59}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" frame-96-341199 pos-abs">
                    <div className=" frame-73-341200">
                      <div className=" army-green-acti-341201">
                        <span className="army-green-acti-341201-0 ">
                          {text60}
                        </span>
                      </div>
                      <div className=" frame-1007-341202">
                        <div className=" frame-20-341203">
                          <div className=" c-3495-341204">
                            <span className="c-3495-341204-0 ">{text61}</span>
                          </div>
                        </div>
                        <div className=" frame-19-341205">
                          <div className=" group-228-341206">
                            <div className=" frame-1006-341207 pos-abs">
                              <div className=" c-3495-341208">
                                <span className="c-3495-341208-0 ">
                                  {text62}
                                </span>
                              </div>
                            </div>
                            <div className=" line-5-341209 pos-abs"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" frame-1022-341210">
                  <div className=" frame-95-341211">
                    <div className=" frame-87-341212">
                      <div
                        className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-341212 "
                        id="id-bg-341212"
                      >
                        {" "}
                      </div>
                      <div className=" frame-86-341213"></div>
                      <div className=" frame-83-341214">
                        <div className=" frame-33-341215">
                          <div className=" add-to-cart-341216">
                            <span className="add-to-cart-341216-0 ">
                              {text63}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" frame-96-341217 pos-abs">
                    <div className=" frame-73-341218">
                      <div className=" army-green-acti-341219">
                        <span className="army-green-acti-341219-0 ">
                          {text64}
                        </span>
                      </div>
                      <div className=" frame-1007-341220">
                        <div className=" frame-20-341221">
                          <div className=" c-3495-341222">
                            <span className="c-3495-341222-0 ">{text65}</span>
                          </div>
                        </div>
                        <div className=" frame-19-341223">
                          <div className=" group-228-341224">
                            <div className=" frame-1006-341225 pos-abs">
                              <div className=" c-3495-341226">
                                <span className="c-3495-341226-0 ">
                                  {text66}
                                </span>
                              </div>
                            </div>
                            <div className=" line-5-341227 pos-abs"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" frame-1023-341228">
                  <div className=" frame-95-341229">
                    <div className=" frame-87-341230">
                      <div
                        className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-341230 "
                        id="id-bg-341230"
                      >
                        {" "}
                      </div>
                      <div className=" frame-86-341231"></div>
                      <div className=" frame-83-341232">
                        <div className=" frame-33-341233">
                          <div className=" add-to-cart-341234">
                            <span className="add-to-cart-341234-0 ">
                              {text67}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" frame-96-341235 pos-abs">
                    <div className=" frame-73-341236">
                      <div className=" army-green-acti-341237">
                        <span className="army-green-acti-341237-0 ">
                          {text68}
                        </span>
                      </div>
                      <div className=" frame-1007-341238">
                        <div className=" frame-20-341239">
                          <div className=" c-3495-341240">
                            <span className="c-3495-341240-0 ">{text69}</span>
                          </div>
                        </div>
                        <div className=" frame-19-341241">
                          <div className=" group-228-341242">
                            <div className=" frame-1006-341243 pos-abs">
                              <div className=" c-3495-341244">
                                <span className="c-3495-341244-0 ">
                                  {text70}
                                </span>
                              </div>
                            </div>
                            <div className=" line-5-341245 pos-abs"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className=" line-1-341246 pos-abs"></div>
        {/* Frame 10511 */}
        <section className=" frame-1051-341247 pos-abs">
          <div className=" frame-142-341248 pos-abs">
            <div className=" frame-136-341249">
              <div className=" headwear-341250">
                <span className="headwear-341250-0 ">{text71}</span>
              </div>
            </div>
            <div className=" frame-137-341251">
              <div className=" tops-341252">
                <span className="tops-341252-0 ">{text72}</span>
              </div>
            </div>
            <div className=" frame-138-341253">
              <div className=" premium-collect-341254">
                <span className="premium-collect-341254-0 ">{text73}</span>
              </div>
            </div>
            <div className=" frame-139-341255">
              <div className=" patrick-betdavi-341256">
                <span className="patrick-betdavi-341256-0 ">{text74}</span>
              </div>
            </div>
            <div className=" frame-140-341257">
              <div className=" accessories-341258">
                <span className="accessories-341258-0 ">{text75}</span>
              </div>
            </div>
            <div className=" frame-141-341259">
              <div className=" kids-341260">
                <span className="kids-341260-0 ">{text76}</span>
              </div>
            </div>
          </div>
          <div className=" next-7-1-341261 pos-abs">
            <div className=" vector-341262 pos-abs">
              <div className="nodeBg-341262 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>
          <div className=" valuetainmentlo-341263 pos-abs">
            <div className=" vector-341264 pos-abs">
              <div className="nodeBg-341264 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341265 pos-abs">
              <div className="nodeBg-341265 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341266 pos-abs">
              <div className="nodeBg-341266 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341267 pos-abs">
              <div className="nodeBg-341267 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341268 pos-abs">
              <div className="nodeBg-341268 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341269 pos-abs">
              <div className="nodeBg-341269 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341270 pos-abs">
              <div className="nodeBg-341270 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341271 pos-abs">
              <div className="nodeBg-341271 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341272 pos-abs">
              <div className="nodeBg-341272 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341273 pos-abs">
              <div className="nodeBg-341273 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341274 pos-abs">
              <div className="nodeBg-341274 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341275 pos-abs">
              <div className="nodeBg-341275 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341276 pos-abs">
              <div className="nodeBg-341276 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341277 pos-abs">
              <div className="nodeBg-341277 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341278 pos-abs">
              <div className="nodeBg-341278 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341279 pos-abs">
              <div className="nodeBg-341279 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341280 pos-abs">
              <div className="nodeBg-341280 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341281 pos-abs">
              <div className="nodeBg-341281 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341282 pos-abs">
              <div className="nodeBg-341282 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341283 pos-abs">
              <div className="nodeBg-341283 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341284 pos-abs">
              <div className="nodeBg-341284 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341285 pos-abs">
              <div className="nodeBg-341285 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341286 pos-abs">
              <div className="nodeBg-341286 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341287 pos-abs">
              <div className="nodeBg-341287 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341288 pos-abs">
              <div className="nodeBg-341288 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341289 pos-abs">
              <div className="nodeBg-341289 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341290 pos-abs">
              <div className="nodeBg-341290 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341291 pos-abs">
              <div className="nodeBg-341291 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341292 pos-abs">
              <div className="nodeBg-341292 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341293 pos-abs">
              <div className="nodeBg-341293 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341294 pos-abs">
              <div className="nodeBg-341294 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341295 pos-abs">
              <div className="nodeBg-341295 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341296 pos-abs">
              <div className="nodeBg-341296 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341297 pos-abs">
              <div className="nodeBg-341297 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341298 pos-abs">
              <div className="nodeBg-341298 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341299 pos-abs">
              <div className="nodeBg-341299 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341300 pos-abs">
              <div className="nodeBg-341300 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341301 pos-abs">
              <div className="nodeBg-341301 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341302 pos-abs">
              <div className="nodeBg-341302 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341303 pos-abs">
              <div className="nodeBg-341303 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341304 pos-abs">
              <div className="nodeBg-341304 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341305 pos-abs">
              <div className="nodeBg-341305 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341306 pos-abs">
              <div className="nodeBg-341306 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341307 pos-abs">
              <div className="nodeBg-341307 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341308 pos-abs">
              <div className="nodeBg-341308 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>
          <div className=" group-248-341309 pos-abs">
            <div className=" frame-1036-341310 pos-abs">
              <div className=" shop-collection-341311">
                <span className="shop-collection-341311-0 ">{text77}</span>
                <span className="shop-collection-341311-1 ">{text78}</span>
              </div>
              <div className=" frame-11-341312">
                <div className=" view-all-341313">
                  <span className="view-all-341313-0 ">{text79}</span>
                </div>
                <div className=" next-7-1-341314">
                  <div className=" vector-341315 pos-abs">
                    <div className="nodeBg-341315 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" frame-1064-341316 pos-abs">
              <div className=" frame-1062-341317">
                <div className=" group-241-341318">
                  <div className=" rectangle-26-341319 pos-abs">
                    <img
                      src={`${image1}`}
                      className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-341319 "
                      alt="341319-ALT"
                    />{" "}
                  </div>
                  <div className=" the-boss-collec-341320 pos-abs">
                    <span className="the-boss-collec-341320-0 ">{text80}</span>
                  </div>
                </div>
                <div className=" frame-1061-341321">
                  <div className=" group-246-341322">
                    <div className=" group-233-341323 pos-abs">
                      <div className=" group-243-341324 pos-abs">
                        <div className=" group-232-341325 pos-abs">
                          <div className=" rectangle-27-341326 pos-abs">
                            <img
                              src={`${image2}`}
                              className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-341326 "
                              alt="341326-ALT"
                            />{" "}
                          </div>
                        </div>
                        <div className=" headwear-341327 pos-abs">
                          <span className="headwear-341327-0 ">{text81}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" group-247-341328">
                    <div className=" group-233-341329 pos-abs">
                      <div className=" group-243-341330 pos-abs">
                        <div className=" group-232-341331 pos-abs">
                          <div className=" rectangle-27-341332 pos-abs">
                            <img
                              src={`${image3}`}
                              className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-341332 "
                              alt="341332-ALT"
                            />{" "}
                          </div>
                        </div>
                        <div className=" value-books-341333 pos-abs">
                          <span className="value-books-341333-0 ">
                            {text82}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" group-244-341334">
                  <div className=" rectangle-26-341335 pos-abs">
                    <img
                      src={`${image4}`}
                      className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-341335 "
                      alt="341335-ALT"
                    />{" "}
                  </div>
                  <div className=" accessories-341336 pos-abs">
                    <span className="accessories-341336-0 ">{text83}</span>
                  </div>
                </div>
              </div>
              <div className=" frame-1063-341337">
                <div className=" group-245-341338">
                  <div className=" group-235-341339 pos-abs">
                    <div className=" rectangle-26-341340 pos-abs">
                      <img
                        src={`${image5}`}
                        className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-341340 "
                        alt="341340-ALT"
                      />{" "}
                    </div>
                  </div>
                  <div className=" the-future-look-341341 pos-abs">
                    <span className="the-future-look-341341-0 ">{text84}</span>
                  </div>
                </div>
                <div className=" group-247-341342">
                  <div className=" group-235-341343 pos-abs">
                    <div className=" rectangle-26-341344 pos-abs">
                      <img
                        src={`${image6}`}
                        className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-341344 "
                        alt="341344-ALT"
                      />{" "}
                    </div>
                  </div>
                  <div className=" tops-341345 pos-abs">
                    <span className="tops-341345-0 ">{text85}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Frame 10941 */}
        <section className=" frame-1094-341346 pos-abs">
          <div className=" frame-1043-341347 pos-abs">
            <div className=" frame-1058-341348">
              <div className=" frame-1066-341349">
                <div className=" future-looks-br-341350">
                  <span className="future-looks-br-341350-0 ">{text86}</span>
                  <span className="future-looks-br-341350-1 ">{text87}</span>
                </div>
                <div className=" frame-1100-341351">
                  <div className=" frame-1097-341352">
                    <div className=" purple-341353">
                      <span className="purple-341353-0 ">{text88}</span>
                    </div>
                    <div className=" div-341354">
                      <span className="div-341354-0 ">{text89}</span>
                    </div>
                  </div>
                  <div className=" frame-1098-341355">
                    <div className=" gold-341356">
                      <span className="gold-341356-0 ">{text90}</span>
                    </div>
                    <div className=" series-341357">
                      <span className="series-341357-0 ">{text91}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" frame-1057-341358">
                <div className=" frame-1055-341359">
                  <div className=" rectangle-31-341360">
                    <img
                      src={`${image7}`}
                      className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-341360 "
                      alt="341360-ALT"
                    />{" "}
                  </div>
                  <div className=" frame-97-341361">
                    <div className=" frame-73-341362">
                      <div className=" flb-shirt--purp-341363">
                        <span className="flb-shirt--purp-341363-0 ">
                          {text92}
                        </span>
                      </div>
                      <div className=" frame-1007-341364">
                        <div className=" frame-20-341365">
                          <div className=" c-3495-341366">
                            <span className="c-3495-341366-0 ">{text93}</span>
                          </div>
                        </div>
                        <div className=" frame-19-341367">
                          <div className=" group-228-341368">
                            <div className=" frame-1006-341369 pos-abs">
                              <div className=" c-3495-341370">
                                <span className="c-3495-341370-0 ">
                                  {text94}
                                </span>
                              </div>
                            </div>
                            <div className=" line-5-341371 pos-abs"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" frame-1056-341372">
                  <div className=" rectangle-32-341373">
                    <img
                      src={`${image8}`}
                      className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-341373 "
                      alt="341373-ALT"
                    />{" "}
                  </div>
                  <div className=" frame-97-341374">
                    <div className=" frame-73-341375">
                      <div className=" flb-shirt--purp-341376">
                        <span className="flb-shirt--purp-341376-0 ">
                          {text95}
                        </span>
                      </div>
                      <div className=" frame-1007-341377">
                        <div className=" frame-20-341378">
                          <div className=" c-3495-341379">
                            <span className="c-3495-341379-0 ">{text96}</span>
                          </div>
                        </div>
                        <div className=" frame-19-341380">
                          <div className=" group-228-341381">
                            <div className=" frame-1006-341382 pos-abs">
                              <div className=" c-3495-341383">
                                <span className="c-3495-341383-0 ">
                                  {text97}
                                </span>
                              </div>
                            </div>
                            <div className=" line-5-341384 pos-abs"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Frame 10501 */}
        <section className=" frame-1050-341385 pos-abs">
          <div className=" valuetainmentlo-341386 pos-abs">
            <div className=" vector-341387 pos-abs">
              <div className="nodeBg-341387 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341388 pos-abs">
              <div className="nodeBg-341388 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341389 pos-abs">
              <div className="nodeBg-341389 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341390 pos-abs">
              <div className="nodeBg-341390 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341391 pos-abs">
              <div className="nodeBg-341391 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341392 pos-abs">
              <div className="nodeBg-341392 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341393 pos-abs">
              <div className="nodeBg-341393 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341394 pos-abs">
              <div className="nodeBg-341394 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341395 pos-abs">
              <div className="nodeBg-341395 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341396 pos-abs">
              <div className="nodeBg-341396 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341397 pos-abs">
              <div className="nodeBg-341397 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341398 pos-abs">
              <div className="nodeBg-341398 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341399 pos-abs">
              <div className="nodeBg-341399 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341400 pos-abs">
              <div className="nodeBg-341400 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341401 pos-abs">
              <div className="nodeBg-341401 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341402 pos-abs">
              <div className="nodeBg-341402 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341403 pos-abs">
              <div className="nodeBg-341403 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341404 pos-abs">
              <div className="nodeBg-341404 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341405 pos-abs">
              <div className="nodeBg-341405 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341406 pos-abs">
              <div className="nodeBg-341406 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341407 pos-abs">
              <div className="nodeBg-341407 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341408 pos-abs">
              <div className="nodeBg-341408 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341409 pos-abs">
              <div className="nodeBg-341409 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341410 pos-abs">
              <div className="nodeBg-341410 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341411 pos-abs">
              <div className="nodeBg-341411 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341412 pos-abs">
              <div className="nodeBg-341412 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341413 pos-abs">
              <div className="nodeBg-341413 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341414 pos-abs">
              <div className="nodeBg-341414 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341415 pos-abs">
              <div className="nodeBg-341415 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341416 pos-abs">
              <div className="nodeBg-341416 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341417 pos-abs">
              <div className="nodeBg-341417 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341418 pos-abs">
              <div className="nodeBg-341418 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341419 pos-abs">
              <div className="nodeBg-341419 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341420 pos-abs">
              <div className="nodeBg-341420 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341421 pos-abs">
              <div className="nodeBg-341421 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341422 pos-abs">
              <div className="nodeBg-341422 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341423 pos-abs">
              <div className="nodeBg-341423 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341424 pos-abs">
              <div className="nodeBg-341424 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341425 pos-abs">
              <div className="nodeBg-341425 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341426 pos-abs">
              <div className="nodeBg-341426 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341427 pos-abs">
              <div className="nodeBg-341427 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341428 pos-abs">
              <div className="nodeBg-341428 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341429 pos-abs">
              <div className="nodeBg-341429 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341430 pos-abs">
              <div className="nodeBg-341430 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className=" vector-341431 pos-abs">
              <div className="nodeBg-341431 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>
          <div className=" frame-1091-341432 pos-abs">
            <div className=" frame-1025-341433 pos-abs">
              <img
                src={`${image9}`}
                className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-341433 "
                alt="341433-ALT"
              />{" "}
            </div>
            <div className=" frame-1086-341434 pos-abs">
              <div className=" frame-1083-341435">
                <div className=" leadership-is-v-341436">
                  <span className="leadership-is-v-341436-0 ">{text98}</span>
                  <span className="leadership-is-v-341436-1 ">{text99}</span>
                </div>
              </div>
              <div className=" frame-190-341437">
                <div className=" entrepreneurs-a-341438">
                  <span className="entrepreneurs-a-341438-0 ">{text100}</span>
                  <span className="entrepreneurs-a-341438-1 ">{text101}</span>
                </div>
              </div>
              <div className=" frame-1084-341439">
                <div className=" frame-191-341440">
                  <div className=" capitalism-is-a-341441">
                    <span className="capitalism-is-a-341441-0 ">{text102}</span>
                    <span className="capitalism-is-a-341441-1 ">{text103}</span>
                  </div>
                </div>
              </div>
              <div className=" frame-1085-341442">
                <div className=" debate-is-welco-341443">
                  <span className="debate-is-welco-341443-0 ">{text104}</span>
                  <span className="debate-is-welco-341443-1 ">{text105}</span>
                </div>
              </div>
            </div>
            <div className=" what-we-believe-341444 pos-abs">
              <span className="what-we-believe-341444-0 ">{text106}</span>
            </div>
          </div>
          <div className=" goldenchessquee-341445 pos-abs">
            <img
              src={`${image10}`}
              className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-341445 "
              alt="341445-ALT"
            />{" "}
          </div>
        </section>
        {/* Frame 10391 */}
        <section className=" frame-1039-341446 pos-abs">
          <div className=" frame-1038-341447 pos-abs">
            <div className=" product-of-the--341448">
              <span className="product-of-the--341448-0 ">{text107}</span>
              <span className="product-of-the--341448-1 ">{text108}</span>
              <span className="product-of-the--341448-2 ">{text109}</span>
            </div>

            <div className=" frame-213-341449">
              <div className=" frame-212-341450">
                <div className=" frame-197-341451">
                  <div className=" layer1-341452">
                    <div className=" path9413-341453 pos-abs">
                      <button className="nodeBg-341453 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></button>
                    </div>
                  </div>
                  <div className=" frame-196-341454">
                    <div className=" rectangle-37-341455">
                      <img
                        src={`${image11}`}
                        className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-341455 "
                        alt="341455-ALT"
                      />{" "}
                    </div>
                    <div className=" rectangle-42-341456">
                      <img
                        src={`${image12}`}
                        className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-341456 "
                        alt="341456-ALT"
                      />{" "}
                    </div>
                    <div className=" rectangle-40-341457">
                      <img
                        src={`${image13}`}
                        className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-341457 "
                        alt="341457-ALT"
                      />{" "}
                    </div>
                    <div className=" rectangle-41-341458">
                      <img
                        src={`${image14}`}
                        className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-341458 "
                        alt="341458-ALT"
                      />{" "}
                    </div>
                  </div>
                  <div className=" layer1-341459">
                    <div className=" path9413-341460 pos-abs">
                      <div className="nodeBg-341460 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>
                </div>
                <div className=" rectangle-36-341461">
                  <img
                    src={`${image15}`}
                    className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-341461 "
                    alt="341461-ALT"
                  />{" "}
                </div>
              </div>
              <div className=" frame-211-341462">
                <div className=" frame-159-341463">
                  <div className=" frame-158-341464">
                    <div className=" frame-173-341465">
                      <div className=" premium-valueta-341466">
                        <span className="premium-valueta-341466-0 ">
                          {text110}
                        </span>
                      </div>
                      <div className=" the-attention-t-341467">
                        <span className="the-attention-t-341467-0 ">
                          {text111}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" frame-210-341468">
                  <div className=" frame-207-341469">
                    <div className=" frame-161-341470">
                      <div className=" price-341471">
                        <span className="price-341471-0 ">{text112}</span>
                      </div>
                      <div className=" c-19995-341472">
                        <span className="c-19995-341472-0 ">{text113}</span>
                      </div>
                    </div>
                    <div className=" frame-203-341473">
                      <div className=" size-341474">
                        <span className="size-341474-0 ">{text114}</span>
                      </div>
                      <div className=" frame-201-341475">
                        <div className=" frame-199-341476">
                          <div className=" s-341477">
                            <span className="s-341477-0 ">{text115}</span>
                          </div>
                        </div>
                        <div className=" frame-201-341478">
                          <div className=" m-341479">
                            <span className="m-341479-0 ">{text116}</span>
                          </div>
                        </div>
                        <div className=" frame-202-341480">
                          <div className=" l-341481">
                            <span className="l-341481-0 ">{text117}</span>
                          </div>
                        </div>
                        <div className=" frame-198-341482">
                          <div className=" xl-341483">
                            <span className="xl-341483-0 ">{text118}</span>
                          </div>
                        </div>
                        <div className=" frame-200-341484">
                          <div className=" xxl-341485">
                            <span className="xxl-341485-0 ">{text119}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" frame-206-341486">
                      <div className=" quantity-341487">
                        <span className="quantity-341487-0 ">{text120}</span>
                      </div>
                      <div className=" frame-201-341488">
                        <button className=" frame-199-341489">
                          <div className=" div-341490">
                            <span className="div-341490-0 ">{text121}</span>
                          </div>
                        </button>
                        <button className=" frame-198-341491">
                          <div className=" c-1-341492">
                            <span className="c-1-341492-0 ">{text122}</span>
                          </div>
                        </button>
                        <button className=" frame-200-341493">
                          <div className=" div-341494">
                            <span className="div-341494-0 ">{text123}</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className=" frame-209-341495">
                    <div className=" frame-205-341496">
                      <button className=" frame-204-341497">
                        <div className=" add-to-cart-341498">
                          <span className="add-to-cart-341498-0 ">
                            {text124}
                          </span>
                        </div>
                      </button>
                      <button className=" frame-11-341499">
                        <div className=" buy-it-now-341500">
                          <span className="buy-it-now-341500-0 ">
                            {text125}
                          </span>
                        </div>
                      </button>
                    </div>
                    <div className=" frame-209-341501">
                      <div className=" frame-203-341502">
                        <div className=" share-341503">
                          <span className="share-341503-0 ">{text126}</span>
                        </div>
                        <div className=" frame-168-341504">
                          <div className=" facebook-4-341505">
                            <div className=" x301facebook-341506 pos-abs">
                              <div className=" icon11-341507 pos-abs">
                                <div className="nodeBg-341507 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                              </div>
                            </div>
                          </div>
                          <div className=" twitter-4-341508">
                            <div className=" x304twitter-341509 pos-abs">
                              <div className="nodeBg-341509 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                            </div>
                          </div>
                          <div className=" linkedin-3-341510">
                            <div className=" x310linkedin-341511 pos-abs">
                              <div className=" vector-341512 pos-abs">
                                <div className="nodeBg-341512 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                              </div>
                              <div className=" vector-341513 pos-abs">
                                <div className="nodeBg-341513 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                              </div>
                              <div className=" vector-341514 pos-abs">
                                <div className="nodeBg-341514 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                              </div>
                            </div>
                          </div>
                          <div className=" instagramlogo-1-341515">
                            <div className=" group-341516 pos-abs">
                              <div className=" vector-341517 pos-abs">
                                <div className="nodeBg-341517 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                              </div>
                              <div className=" vector-341518 pos-abs">
                                <div className="nodeBg-341518 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                              </div>
                              <div className=" vector-341519 pos-abs">
                                <div className="nodeBg-341519 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" frame-202-341520">
                        <div className=" view-details-341521">
                          <span className="view-details-341521-0 ">
                            {text127}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Frame 2231 */}
        <section className=" frame-223-341522 pos-abs">
          <div className=" frame-1050-341523 pos-abs">
            <div className=" frame-1046-341524">
              <div className=" delivery-341525">
                <div className=" vector-341526 pos-abs">
                  <div className="nodeBg-341526 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
                <div className=" vector-341527 pos-abs">
                  <div className="nodeBg-341527 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
                <div className=" vector-341528 pos-abs">
                  <div className="nodeBg-341528 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
                <div className=" vector-341529 pos-abs">
                  <div className="nodeBg-341529 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>
              <div className=" frame-216-341530">
                <div className=" shipping-341531">
                  <span className="shipping-341531-0 ">{text128}</span>
                </div>
                <div className=" the-attention-t-341532">
                  <span className="the-attention-t-341532-0 ">{text129}</span>
                </div>
              </div>
            </div>
            <div className=" frame-218-341533">
              <div className=" exchange-341534">
                <div className=" vector-341535 pos-abs">
                  <div className="nodeBg-341535 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
                <div className=" vector-341536 pos-abs">
                  <div className="nodeBg-341536 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
                <div className=" vector-341537 pos-abs">
                  <div className="nodeBg-341537 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
                <div className=" vector-341538 pos-abs">
                  <div className="nodeBg-341538 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>
              <div className=" frame-216-341539">
                <div className=" return-341540">
                  <span className="return-341540-0 ">{text130}</span>
                </div>
                <div className=" the-attention-t-341541">
                  <span className="the-attention-t-341541-0 ">{text131}</span>
                </div>
              </div>
            </div>
            <div className=" frame-220-341542">
              <div className=" customersupport-341543">
                <div className=" group-341544 pos-abs">
                  <div className=" vector-341545 pos-abs">
                    <div className="nodeBg-341545 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className=" vector-341546 pos-abs">
                    <div className="nodeBg-341546 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className=" vector-341547 pos-abs">
                    <div className="nodeBg-341547 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className=" vector-341548 pos-abs">
                    <div className="nodeBg-341548 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className=" vector-341549 pos-abs">
                    <div className="nodeBg-341549 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>
              <div className=" frame-216-341550">
                <div className=" support-341551">
                  <span className="support-341551-0 ">{text132}</span>
                </div>
                <div className=" the-attention-t-341552">
                  <span className="the-attention-t-341552-0 ">{text133}</span>
                </div>
              </div>
            </div>
            <div className=" frame-221-341553">
              <div className=" verified-341554">
                <div className=" vector-341555 pos-abs">
                  <div className="nodeBg-341555 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>
              <div className=" frame-219-341556">
                <div className=" payment-341557">
                  <span className="payment-341557-0 ">{text134}</span>
                </div>
                <div className=" the-attention-t-341558">
                  <span className="the-attention-t-341558-0 ">{text135}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Frame 10411 */}
        <section className=" frame-1041-341559 pos-abs">
          <div className=" frame-1074-341560 pos-abs">
            <div className=" line-4-341561 pos-abs"></div>
            <div className=" frame-1089-341562 pos-abs">
              <div className=" frame-1088-341563">
                <div className=" frame-1071-341564">
                  <div className=" line-4-341565"></div>
                  <div className=" frame-1041-341566">
                    <div className=" valuetainmentlo-341567">
                      <div className=" vector-341568 pos-abs">
                        <div className="nodeBg-341568 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341569 pos-abs">
                        <div className="nodeBg-341569 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341570 pos-abs">
                        <div className="nodeBg-341570 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341571 pos-abs">
                        <div className="nodeBg-341571 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341572 pos-abs">
                        <div className="nodeBg-341572 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341573 pos-abs">
                        <div className="nodeBg-341573 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341574 pos-abs">
                        <div className="nodeBg-341574 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341575 pos-abs">
                        <div className="nodeBg-341575 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341576 pos-abs">
                        <div className="nodeBg-341576 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341577 pos-abs">
                        <div className="nodeBg-341577 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341578 pos-abs">
                        <div className="nodeBg-341578 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341579 pos-abs">
                        <div className="nodeBg-341579 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341580 pos-abs">
                        <div className="nodeBg-341580 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341581 pos-abs">
                        <div className="nodeBg-341581 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341582 pos-abs">
                        <div className="nodeBg-341582 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341583 pos-abs">
                        <div className="nodeBg-341583 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341584 pos-abs">
                        <div className="nodeBg-341584 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341585 pos-abs">
                        <div className="nodeBg-341585 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341586 pos-abs">
                        <div className="nodeBg-341586 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341587 pos-abs">
                        <div className="nodeBg-341587 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341588 pos-abs">
                        <div className="nodeBg-341588 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341589 pos-abs">
                        <div className="nodeBg-341589 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341590 pos-abs">
                        <div className="nodeBg-341590 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341591 pos-abs">
                        <div className="nodeBg-341591 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341592 pos-abs">
                        <div className="nodeBg-341592 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341593 pos-abs">
                        <div className="nodeBg-341593 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341594 pos-abs">
                        <div className="nodeBg-341594 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341595 pos-abs">
                        <div className="nodeBg-341595 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341596 pos-abs">
                        <div className="nodeBg-341596 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341597 pos-abs">
                        <div className="nodeBg-341597 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341598 pos-abs">
                        <div className="nodeBg-341598 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341599 pos-abs">
                        <div className="nodeBg-341599 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341600 pos-abs">
                        <div className="nodeBg-341600 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341601 pos-abs">
                        <div className="nodeBg-341601 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341602 pos-abs">
                        <div className="nodeBg-341602 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341603 pos-abs">
                        <div className="nodeBg-341603 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341604 pos-abs">
                        <div className="nodeBg-341604 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341605 pos-abs">
                        <div className="nodeBg-341605 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341606 pos-abs">
                        <div className="nodeBg-341606 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341607 pos-abs">
                        <div className="nodeBg-341607 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341608 pos-abs">
                        <div className="nodeBg-341608 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341609 pos-abs">
                        <div className="nodeBg-341609 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341610 pos-abs">
                        <div className="nodeBg-341610 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341611 pos-abs">
                        <div className="nodeBg-341611 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                      <div className=" vector-341612 pos-abs">
                        <div className="nodeBg-341612 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                    </div>
                    <div className=" vtmerch-341613">
                      <span className="vtmerch-341613-0 ">{text136}</span>
                    </div>
                  </div>
                  <div className=" line-5-341614"></div>
                </div>
                <div className=" frame-1078-341615">
                  <div className=" frame-1070-341616">
                    <div className=" subscribe-and-b-341617">
                      <span className="subscribe-and-b-341617-0 ">
                        {text137}
                      </span>
                    </div>
                    <div className=" frame-1081-341618">
                      <div className=" frame-1080-341619">
                        <div className=" enter-your-emai-341620">
                          <span className="enter-your-emai-341620-0 ">
                            {text138}
                          </span>
                        </div>
                      </div>
                      <div className=" frame-1068-341621">
                        <div className=" subscribe-341622">
                          <span className="subscribe-341622-0 ">{text139}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" frame-1076-341623">
                    <div className=" frame-988-341624">
                      <div className=" customer-servic-341625">
                        <span className="customer-servic-341625-0 ">
                          {text140}
                        </span>
                      </div>
                      <div className=" frame-986-341626">
                        <div className=" about-us-341627">
                          <span className="about-us-341627-0 ">{text141}</span>
                        </div>
                        <div className=" search-341628">
                          <span className="search-341628-0 ">{text142}</span>
                        </div>
                        <div className=" privacy-policy-341629">
                          <span className="privacy-policy-341629-0 ">
                            {text143}
                          </span>
                        </div>
                        <div className=" contact-us-341630">
                          <span className="contact-us-341630-0 ">
                            {text144}
                          </span>
                        </div>
                        <div className=" terms-of-servic-341631">
                          <span className="terms-of-servic-341631-0 ">
                            {text145}
                          </span>
                        </div>
                        <div className=" refund-policy-341632">
                          <span className="refund-policy-341632-0 ">
                            {text146}
                          </span>
                        </div>
                        <div className=" track-order-341633">
                          <span className="track-order-341633-0 ">
                            {text147}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className=" frame-987-341634">
                      <div className=" products-341635">
                        <span className="products-341635-0 ">{text148}</span>
                      </div>
                      <div className=" frame-986-341636">
                        <div className=" featured-produc-341637">
                          <span className="featured-produc-341637-0 ">
                            {text149}
                          </span>
                        </div>
                        <div className=" bestseller-341638">
                          <span className="bestseller-341638-0 ">
                            {text150}
                          </span>
                        </div>
                        <div className=" latest-product-341639">
                          <span className="latest-product-341639-0 ">
                            {text151}
                          </span>
                        </div>
                        <div className=" all-collections-341640">
                          <span className="all-collections-341640-0 ">
                            {text152}
                          </span>
                        </div>
                        <div className=" all-products-341641">
                          <span className="all-products-341641-0 ">
                            {text153}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className=" frame-991-341642">
                      <div className=" contact-us-341643">
                        <span className="contact-us-341643-0 ">{text154}</span>
                      </div>
                      <div className=" frame-986-341644">
                        <div className=" available-betwe-341645">
                          <span className="available-betwe-341645-0 ">
                            {text155}
                          </span>
                        </div>
                        <div className=" frame-993-341646">
                          <div className=" telephone-2-1-341647">
                            <div className=" group-341648 pos-abs">
                              <div className=" vector-341649 pos-abs">
                                <div className="nodeBg-341649 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                              </div>
                            </div>
                          </div>
                          <div className=" c-013456789-341650">
                            <span className="c-013456789-341650-0 ">
                              {text156}
                            </span>
                          </div>
                        </div>
                        <div className=" frame-995-341651">
                          <div className=" email-1-341652">
                            <div className=" vector-341653 pos-abs">
                              <div className="nodeBg-341653 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                            </div>
                          </div>
                          <div className=" storevaluetainm-341654">
                            <span className="storevaluetainm-341654-0 ">
                              {text157}
                            </span>
                          </div>
                        </div>
                        <div className=" frame-168-341655">
                          <div className=" facebook-4-341656">
                            <div className=" x301facebook-341657 pos-abs">
                              <div className=" icon11-341658 pos-abs">
                                <div className="nodeBg-341658 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                              </div>
                            </div>
                          </div>
                          <div className=" twitter-4-341659">
                            <div className=" x304twitter-341660 pos-abs">
                              <div className="nodeBg-341660 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                            </div>
                          </div>
                          <div className=" linkedin-3-341661">
                            <div className=" x310linkedin-341662 pos-abs">
                              <div className=" vector-341663 pos-abs">
                                <div className="nodeBg-341663 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                              </div>
                              <div className=" vector-341664 pos-abs">
                                <div className="nodeBg-341664 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                              </div>
                              <div className=" vector-341665 pos-abs">
                                <div className="nodeBg-341665 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                              </div>
                            </div>
                          </div>
                          <div className=" instagramlogo-1-341666">
                            <div className=" group-341667 pos-abs">
                              <div className=" vector-341668 pos-abs">
                                <div className="nodeBg-341668 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                              </div>
                              <div className=" vector-341669 pos-abs">
                                <div className="nodeBg-341669 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                              </div>
                              <div className=" vector-341670 pos-abs">
                                <div className="nodeBg-341670 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" frame-1087-341671">
                <div className=" frame-1077-341672">
                  <div className=" c-2024-valuetainm-341673">
                    <span className="c-2024-valuetainm-341673-0 ">
                      {text158}
                    </span>
                  </div>
                  <div className=" designed-and-de-341674">
                    <span className="designed-and-de-341674-0 ">{text159}</span>
                  </div>
                </div>
                <div className=" frame-1079-341675">
                  <div className=" frame-986-341676">
                    <div className=" frame-731-341677">
                      <div className=" frame-730-341678">
                        <div className=" united-states-u-341679">
                          <span className="united-states-u-341679-0 ">
                            {text160}
                          </span>
                        </div>
                        <div className=" materialsymbols-341680">
                          <div className=" vector-341681 pos-abs">
                            <div className="nodeBg-341681 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" frame-726-341682">
                      <div className=" visa-1-341683">
                        <div className=" vector-341684 pos-abs">
                          <div className="nodeBg-341684 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341685 pos-abs">
                          <div className="nodeBg-341685 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341686 pos-abs">
                          <div className="nodeBg-341686 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341687 pos-abs">
                          <div className="nodeBg-341687 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341688 pos-abs">
                          <div className="nodeBg-341688 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341689 pos-abs">
                          <div className="nodeBg-341689 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341690 pos-abs">
                          <div className="nodeBg-341690 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341691 pos-abs">
                          <div className="nodeBg-341691 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341692 pos-abs">
                          <div className="nodeBg-341692 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341693 pos-abs">
                          <div className="nodeBg-341693 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341694 pos-abs">
                          <div className="nodeBg-341694 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" group-341695 pos-abs">
                          <div className=" vector-341696 pos-abs">
                            <div className="nodeBg-341696 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" vector-341697 pos-abs">
                            <div className="nodeBg-341697 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" vector-341698 pos-abs">
                            <div className="nodeBg-341698 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" vector-341699 pos-abs">
                            <div className="nodeBg-341699 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                        </div>
                      </div>
                      <div className=" applepay-1-341700">
                        <div className=" group-341701 pos-abs">
                          <div className=" vector-341702 pos-abs">
                            <div className="nodeBg-341702 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" vector-341703 pos-abs">
                            <div className="nodeBg-341703 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" vector-341704 pos-abs">
                            <div className="nodeBg-341704 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" vector-341705 pos-abs">
                            <div className="nodeBg-341705 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" vector-341706 pos-abs">
                            <div className="nodeBg-341706 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" vector-341707 pos-abs">
                            <div className="nodeBg-341707 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" vector-341708 pos-abs">
                            <div className="nodeBg-341708 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" vector-341709 pos-abs">
                            <div className="nodeBg-341709 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" vector-341710 pos-abs">
                            <div className="nodeBg-341710 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" vector-341711 pos-abs">
                            <div className="nodeBg-341711 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" vector-341712 pos-abs">
                            <div className="nodeBg-341712 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" group-341713 pos-abs">
                            <div className=" group-341714 pos-abs">
                              <div className=" vector-341715 pos-abs">
                                <div className="nodeBg-341715 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                              </div>
                              <div className=" vector-341716 pos-abs">
                                <div className="nodeBg-341716 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                              </div>
                            </div>
                            <div className=" group-341717 pos-abs">
                              <div className=" vector-341718 pos-abs">
                                <div className="nodeBg-341718 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                              </div>
                              <div className=" vector-341719 pos-abs">
                                <div className="nodeBg-341719 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                              </div>
                              <div className=" vector-341720 pos-abs">
                                <div className="nodeBg-341720 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" dinersclub-1-341721">
                        <div className=" vector-341722 pos-abs">
                          <div className="nodeBg-341722 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" group-341723 pos-abs">
                          <div className=" vector-341724 pos-abs">
                            <div className="nodeBg-341724 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" vector-341725 pos-abs">
                            <div className="nodeBg-341725 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" vector-341726 pos-abs">
                            <div className="nodeBg-341726 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                        </div>
                        <div className=" vector-341727 pos-abs">
                          <div className="nodeBg-341727 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341728 pos-abs">
                          <div className="nodeBg-341728 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                      </div>
                      <div className=" visa-2-341729">
                        <div className=" vector-341730 pos-abs">
                          <div className="nodeBg-341730 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341731 pos-abs">
                          <div className="nodeBg-341731 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341732 pos-abs">
                          <div className="nodeBg-341732 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341733 pos-abs">
                          <div className="nodeBg-341733 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341734 pos-abs">
                          <div className="nodeBg-341734 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341735 pos-abs">
                          <div className="nodeBg-341735 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341736 pos-abs">
                          <div className="nodeBg-341736 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341737 pos-abs">
                          <div className="nodeBg-341737 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341738 pos-abs">
                          <div className="nodeBg-341738 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341739 pos-abs">
                          <div className="nodeBg-341739 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341740 pos-abs">
                          <div className="nodeBg-341740 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" group-341741 pos-abs">
                          <div className=" vector-341742 pos-abs">
                            <div className="nodeBg-341742 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" vector-341743 pos-abs">
                            <div className="nodeBg-341743 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" vector-341744 pos-abs">
                            <div className="nodeBg-341744 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" vector-341745 pos-abs">
                            <div className="nodeBg-341745 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                        </div>
                      </div>
                      <div className=" amex-1-341746">
                        <div className=" group-341747 pos-abs">
                          <div className=" vector-341748 pos-abs">
                            <div className="nodeBg-341748 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" vector-341749 pos-abs">
                            <div className="nodeBg-341749 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                        </div>
                      </div>
                      <div className=" paypal-1-341750">
                        <div className=" vector-341751 pos-abs">
                          <div className="nodeBg-341751 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341752 pos-abs">
                          <div className="nodeBg-341752 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341753 pos-abs">
                          <div className="nodeBg-341753 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341754 pos-abs">
                          <div className="nodeBg-341754 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341755 pos-abs">
                          <div className="nodeBg-341755 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341756 pos-abs">
                          <div className="nodeBg-341756 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341757 pos-abs">
                          <div className="nodeBg-341757 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341758 pos-abs">
                          <div className="nodeBg-341758 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341759 pos-abs">
                          <div className="nodeBg-341759 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341760 pos-abs">
                          <div className="nodeBg-341760 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341761 pos-abs">
                          <div className="nodeBg-341761 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341762 pos-abs">
                          <div className="nodeBg-341762 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" group-341763 pos-abs">
                          <div className=" vector-341764 pos-abs">
                            <div className="nodeBg-341764 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" vector-341765 pos-abs">
                            <div className="nodeBg-341765 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" vector-341766 pos-abs">
                            <div className="nodeBg-341766 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                        </div>
                        <div className=" group-341767 pos-abs">
                          <div className=" vector-341768 pos-abs">
                            <div className="nodeBg-341768 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" vector-341769 pos-abs">
                            <div className="nodeBg-341769 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" vector-341770 pos-abs">
                            <div className="nodeBg-341770 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                        </div>
                        <div className=" group-341771 pos-abs">
                          <div className=" vector-341772 pos-abs">
                            <div className="nodeBg-341772 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" vector-341773 pos-abs">
                            <div className="nodeBg-341773 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                        </div>
                      </div>
                      <div className=" americanexpress-341774">
                        <div className=" vector-341775 pos-abs">
                          <div className="nodeBg-341775 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" vector-341776 pos-abs">
                          <div className="nodeBg-341776 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                        <div className=" group-341777 pos-abs">
                          <div className=" vector-341778 pos-abs">
                            <div className="nodeBg-341778 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" vector-341779 pos-abs">
                            <div className="nodeBg-341779 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" vector-341780 pos-abs">
                            <div className="nodeBg-341780 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" vector-341781 pos-abs">
                            <div className="nodeBg-341781 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" vector-341782 pos-abs">
                            <div className="nodeBg-341782 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" vector-341783 pos-abs">
                            <div className="nodeBg-341783 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" vector-341784 pos-abs">
                            <div className="nodeBg-341784 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" vector-341785 pos-abs">
                            <div className="nodeBg-341785 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                          <div className=" vector-341786 pos-abs">
                            <div className="nodeBg-341786 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Frame 10241 */}
        <section className=" frame-1024-341787 pos-abs">
          <div className=" group-229-341788 pos-abs">
            <div className=" patsignature-wh-341789 pos-abs">
              <img
                src={`${image16}`}
                className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-341789 "
                alt="341789-ALT"
              />{" "}
            </div>
          </div>
          <div className=" frame-1026-341790 pos-abs">
            <div className=" chooseyourenemi-341791">
              <img
                src={`${image17}`}
                className="pos-abs  image-div bg-no-repeat  bg-crop nodeBg-341791 "
                alt="341791-ALT"
              />{" "}
            </div>
            <div className=" front-341792">
              <img
                src={`${image18}`}
                className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-341792 "
                alt="341792-ALT"
              />{" "}
            </div>
          </div>
          <div className=" frame-1092-341793 pos-abs">
            <div className=" frame-1025-341794">
              <div className=" patrick-betdavi-341795">
                <span className="patrick-betdavi-341795-0 ">{text161}</span>
              </div>
              <div className=" frame-1094-341796">
                <div className=" signed-341797">
                  <span className="signed-341797-0 ">{text162}</span>
                </div>
                <div className=" collection-341798">
                  <span className="collection-341798-0 ">{text163}</span>
                </div>
              </div>
            </div>
            <div className=" frame-11-341799">
              <div className=" shop-now-341800">
                <span className="shop-now-341800-0 ">{text164}</span>
              </div>
              <div className=" next-7-1-341801">
                <div className=" vector-341802 pos-abs">
                  <div className="nodeBg-341802 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Frame 10701 */}
        <section className=" frame-1070-341803 pos-abs">
          <div className=" line-1-341804 pos-abs"></div>
          <div className=" group-213-341805 pos-abs">
            <div className=" quotes-341806 pos-abs">
              <div className=" vector-341807 pos-abs">
                <div className="nodeBg-341807 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
              <div className=" vector-341808 pos-abs">
                <div className="nodeBg-341808 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
            </div>
            <div className=" frame-1051-341809 pos-abs">
              <div className=" frame-1029-341810">
                <div className=" our-mission-is--341811">
                  <span className="our-mission-is--341811-0 ">{text165}</span>
                </div>
              </div>
              <div className=" frame-1030-341812">
                <div className=" and-empower-cur-341813">
                  <span className="and-empower-cur-341813-0 ">{text166}</span>
                </div>
              </div>
              <div className=" frame-1031-341814">
                <div className=" leaders-around--341815">
                  <span className="leaders-around--341815-0 ">{text167}</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" pathomehero-1-341816 pos-abs">
            <img
              src={`${image19}`}
              className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-341816 "
              alt="341816-ALT"
            />{" "}
          </div>
        </section>
      </div>
    </div>
  );
};
export default Component;

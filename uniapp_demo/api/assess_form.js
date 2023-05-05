/* 评估表单内容 */
const assessFormData = {
    "success": 1,
    "msg": "成功",
    "code": 0,
    "data": {
        "title": "通用护理评估表单",
        "version": 17,
        "questions": [
            {
                "qid": "1611797524333",
                "title": "体温(℃)3",
                "qTypeId": "q_text",
                "timestamp": "1611797524333",
                "options": [
                    {
                        "title": "体温(℃)3",
                        "no": "1",
                        "action": "",
                        "data": ""
                    }
                ],
                "no": "1",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797577265",
                "title": "脉搏(次/分)",
                "qTypeId": "q_text",
                "timestamp": "1611797577265",
                "options": [
                    {
                        "title": "脉搏(次/分)",
                        "no": "1",
                        "action": "",
                        "data": ""
                    }
                ],
                "no": "2",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797616728",
                "title": "呼吸(次/分)",
                "qTypeId": "q_text",
                "timestamp": "1611797616728",
                "options": [
                    {
                        "title": "呼吸(次/分)",
                        "no": "1",
                        "action": "",
                        "data": ""
                    }
                ],
                "no": "3",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797702625",
                "title": "血压(mmHg)",
                "qTypeId": "q_text",
                "timestamp": "1611797702625",
                "options": [
                    {
                        "title": "血压(mmHg)",
                        "no": "1",
                        "action": "",
                        "data": ""
                    }
                ],
                "no": "4",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797707290",
                "title": "体重(KG)",
                "qTypeId": "q_text",
                "timestamp": "1611797707290",
                "options": [
                    {
                        "title": "体重(KG)",
                        "no": "1",
                        "action": "",
                        "data": ""
                    }
                ],
                "no": "5",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797712307",
                "title": "身高(cm)",
                "qTypeId": "q_text",
                "timestamp": "1611797712307",
                "options": [
                    {
                        "title": "身高(cm)",
                        "no": "1",
                        "action": "",
                        "data": ""
                    }
                ],
                "no": "6",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797723340",
                "title": "病史",
                "qTypeId": "q_text",
                "timestamp": "1611797723340",
                "options": [
                    {
                        "title": "病史",
                        "no": "1",
                        "action": "",
                        "data": ""
                    }
                ],
                "no": "7",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797747672",
                "title": "意识",
                "qTypeId": "q_radio",
                "timestamp": "1611797747672",
                "options": [
                    {
                        "title": "清楚",
                        "no": "1",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "欠清",
                        "no": "2",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "模糊",
                        "no": "3",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "嗜睡",
                        "no": "4",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "烦躁",
                        "no": "5",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "昏迷",
                        "no": "6",
                        "action": "",
                        "data": ""
                    }
                ],
                "no": "8",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797818218",
                "title": "记忆力",
                "qTypeId": "q_radio",
                "timestamp": "1611797818218",
                "options": [
                    {
                        "title": "良好",
                        "no": "1",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "减退",
                        "no": "2",
                        "action": "",
                        "data": ""
                    }
                ],
                "no": "9",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797816736",
                "title": "理解能力",
                "qTypeId": "q_radio",
                "timestamp": "1611797816736",
                "options": [
                    {
                        "title": "完全理解",
                        "no": "1",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "欠缺",
                        "no": "2",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "部分理解",
                        "no": "3",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "无法理解",
                        "no": "4",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "其他",
                        "no": "5",
                        "action": "",
                        "data": "",
                        "textbox": 1
                    }
                ],
                "no": "10",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797814985",
                "title": "表达能力",
                "qTypeId": "q_radio",
                "timestamp": "1611797814985",
                "options": [
                    {
                        "title": "清晰表达",
                        "no": "1",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "欠清",
                        "no": "2",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "含糊表达",
                        "no": "3",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "不能表达",
                        "no": "4",
                        "action": "",
                        "data": ""
                    }
                ],
                "no": "11",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797754605",
                "title": "视力",
                "qTypeId": "q_radio",
                "timestamp": "1611797754605",
                "options": [
                    {
                        "title": "正常",
                        "no": "1",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "近视",
                        "no": "2",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "远视",
                        "no": "3",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "老花",
                        "no": "4",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "失明",
                        "no": "5",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "其他",
                        "no": "6",
                        "action": "",
                        "data": "",
                        "textbox": 1
                    }
                ],
                "no": "12",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797813719",
                "title": "睡眠",
                "qTypeId": "q_radio",
                "timestamp": "1611797813719",
                "options": [
                    {
                        "title": "正常",
                        "no": "1",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "入睡困难",
                        "no": "2",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "易醒",
                        "no": "3",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "多梦",
                        "no": "4",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "失眠",
                        "no": "5",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "药物副猪睡眠",
                        "no": "6",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "其他",
                        "no": "7",
                        "action": "",
                        "data": "",
                        "textbox": 1
                    }
                ],
                "no": "13",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797812518",
                "title": "喝酒",
                "qTypeId": "q_radio",
                "timestamp": "1611797812518",
                "options": [
                    {
                        "title": "无",
                        "no": "1",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "有",
                        "no": "2",
                        "action": "",
                        "data": ""
                    }
                ],
                "no": "14",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797811169",
                "title": "吸烟",
                "qTypeId": "q_radio",
                "timestamp": "1611797811169",
                "options": [
                    {
                        "title": "无",
                        "no": "1",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "有",
                        "no": "2",
                        "action": "",
                        "data": ""
                    }
                ],
                "no": "15",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797772304",
                "title": "饮食习惯",
                "qTypeId": "q_radio",
                "timestamp": "1611797772304",
                "options": [
                    {
                        "title": "合理",
                        "no": "1",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "高蛋白",
                        "no": "2",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "高脂肪",
                        "no": "3",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "高碳水化合物",
                        "no": "4",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "素食",
                        "no": "5",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "偏食",
                        "no": "6",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "忌食",
                        "no": "7",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "其他",
                        "no": "8",
                        "action": "",
                        "data": "",
                        "textbox": 1
                    }
                ],
                "no": "16",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797809186",
                "title": "咀嚼困难",
                "qTypeId": "q_radio",
                "timestamp": "1611797809186",
                "options": [
                    {
                        "title": "无",
                        "no": "1",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "有",
                        "no": "2",
                        "action": "",
                        "data": ""
                    }
                ],
                "no": "17",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797832668",
                "title": "吞咽困难",
                "qTypeId": "q_radio",
                "timestamp": "1611797832668",
                "options": [
                    {
                        "title": "无",
                        "no": "1",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "有",
                        "no": "2",
                        "action": "",
                        "data": ""
                    }
                ],
                "no": "18",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797828602",
                "title": "大便",
                "qTypeId": "q_radio",
                "timestamp": "1611797828602",
                "options": [
                    {
                        "title": "正常",
                        "no": "1",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "便秘",
                        "no": "2",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "腹泻",
                        "no": "3",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "失禁",
                        "no": "4",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "其他",
                        "no": "5",
                        "action": "",
                        "data": "",
                        "textbox": 1
                    }
                ],
                "no": "19",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797777770",
                "title": "小便",
                "qTypeId": "q_radio",
                "timestamp": "1611797777770",
                "options": [
                    {
                        "title": "正常",
                        "no": "1",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "色",
                        "no": "2",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "尿路中断",
                        "no": "3",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "尿频",
                        "no": "4",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "尿急",
                        "no": "5",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "尿痛",
                        "no": "6",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "留置导尿",
                        "no": "7",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "其他",
                        "no": "8",
                        "action": "",
                        "data": "",
                        "textbox": 1
                    }
                ],
                "no": "20",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797806603",
                "title": "食欲",
                "qTypeId": "q_radio",
                "timestamp": "1611797806603",
                "options": [
                    {
                        "title": "正常",
                        "no": "1",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "亢进",
                        "no": "2",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "下降",
                        "no": "3",
                        "action": "",
                        "data": ""
                    }
                ],
                "no": "21",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797826718",
                "title": "自主能力",
                "qTypeId": "q_radio",
                "timestamp": "1611797826718",
                "options": [
                    {
                        "title": "完全自理",
                        "no": "1",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "大部分自理",
                        "no": "2",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "小部分自理",
                        "no": "3",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "完全不能自理",
                        "no": "4",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "其他",
                        "no": "5",
                        "action": "",
                        "data": "",
                        "textbox": 1
                    }
                ],
                "no": "22",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797827701",
                "title": "活动能力",
                "qTypeId": "q_radio",
                "timestamp": "1611797827701",
                "options": [
                    {
                        "title": "自主活动",
                        "no": "1",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "轮椅",
                        "no": "2",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "卧床自行翻身",
                        "no": "3",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "辅助翻身",
                        "no": "4",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "床椅辅助转移",
                        "no": "5",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "床椅自行转移",
                        "no": "6",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "室内活动",
                        "no": "7",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "室外活动",
                        "no": "8",
                        "action": "",
                        "data": ""
                    }
                ],
                "no": "23",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797829518",
                "title": "肌力左上",
                "qTypeId": "q_radio",
                "timestamp": "1611797829518",
                "options": [
                    {
                        "title": "V级",
                        "no": "1",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "IV级",
                        "no": "2",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "III级",
                        "no": "3",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "II级",
                        "no": "4",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "I级",
                        "no": "5",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "0级",
                        "no": "6",
                        "action": "",
                        "data": ""
                    }
                ],
                "no": "24",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797830285",
                "title": "肌力左下",
                "qTypeId": "q_radio",
                "timestamp": "1611797830285",
                "options": [
                    {
                        "title": "V级",
                        "no": "1",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "IV级",
                        "no": "2",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "III级",
                        "no": "3",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "II级",
                        "no": "4",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "I级",
                        "no": "5",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "0级",
                        "no": "6",
                        "action": "",
                        "data": ""
                    }
                ],
                "no": "25",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797831086",
                "title": "肌力右上",
                "qTypeId": "q_radio",
                "timestamp": "1611797831086",
                "options": [
                    {
                        "title": "V级",
                        "no": "1",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "IV级",
                        "no": "2",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "III级",
                        "no": "3",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "II级",
                        "no": "4",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "I级",
                        "no": "5",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "0级",
                        "no": "6",
                        "action": "",
                        "data": ""
                    }
                ],
                "no": "26",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797831851",
                "title": "肌力右下",
                "qTypeId": "q_radio",
                "timestamp": "1611797831851",
                "options": [
                    {
                        "title": "V级",
                        "no": "1",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "IV级",
                        "no": "2",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "III级",
                        "no": "3",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "II级",
                        "no": "4",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "I级",
                        "no": "5",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "0级",
                        "no": "6",
                        "action": "",
                        "data": ""
                    }
                ],
                "no": "27",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797833434",
                "title": "全身营养状况",
                "qTypeId": "q_radio",
                "timestamp": "1611797833434",
                "options": [
                    {
                        "title": "良好",
                        "no": "1",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "中等",
                        "no": "2",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "不良",
                        "no": "3",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "肥胖",
                        "no": "4",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "消瘦",
                        "no": "5",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "其他",
                        "no": "6",
                        "action": "",
                        "data": "",
                        "textbox": 1
                    }
                ],
                "no": "28",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797834351",
                "title": "皮肤黏膜",
                "qTypeId": "q_radio",
                "timestamp": "1611797834351",
                "options": [
                    {
                        "title": "正常",
                        "no": "1",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "黄染",
                        "no": "2",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "发绀",
                        "no": "3",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "水肿",
                        "no": "4",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "潮红",
                        "no": "5",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "苍白",
                        "no": "6",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "其他",
                        "no": "7",
                        "action": "",
                        "data": "",
                        "textbox": 1
                    }
                ],
                "no": "29",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797835134",
                "title": "口腔",
                "qTypeId": "q_radio",
                "timestamp": "1611797835134",
                "options": [
                    {
                        "title": "正常",
                        "no": "1",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "溃疡",
                        "no": "2",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "假膜",
                        "no": "3",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "其他",
                        "no": "4",
                        "action": "",
                        "data": "",
                        "textbox": 1
                    }
                ],
                "no": "30",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797835901",
                "title": "牙龈",
                "qTypeId": "q_radio",
                "timestamp": "1611797835901",
                "options": [
                    {
                        "title": "正常",
                        "no": "1",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "红肿",
                        "no": "2",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "出血",
                        "no": "3",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "溃疡",
                        "no": "4",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "其他",
                        "no": "5",
                        "action": "",
                        "data": "",
                        "textbox": 1
                    }
                ],
                "no": "31",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797836667",
                "title": "牙齿",
                "qTypeId": "q_radio",
                "timestamp": "1611797836667",
                "options": [
                    {
                        "title": "正常",
                        "no": "1",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "义齿",
                        "no": "2",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "缺齿",
                        "no": "3",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "其他",
                        "no": "4",
                        "action": "",
                        "data": "",
                        "textbox": 1
                    }
                ],
                "no": "32",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797849568",
                "title": "压疮",
                "qTypeId": "q_text",
                "timestamp": "1611797849568",
                "options": [
                    {
                        "title": "压疮",
                        "no": "1",
                        "action": "",
                        "data": ""
                    }
                ],
                "no": "33",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797851201",
                "title": "导管情况",
                "qTypeId": "q_radio",
                "timestamp": "1611797851201",
                "options": [
                    {
                        "title": "无",
                        "no": "1",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "鼻导管",
                        "no": "2",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "胃管",
                        "no": "3",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "导尿管",
                        "no": "4",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "其他",
                        "no": "5",
                        "action": "",
                        "data": "",
                        "textbox": 1
                    }
                ],
                "no": "34",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797852084",
                "title": "造口情况",
                "qTypeId": "q_radio",
                "timestamp": "1611797852084",
                "options": [
                    {
                        "title": "无",
                        "no": "1",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "红肿",
                        "no": "2",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "出血",
                        "no": "3",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "溃烂",
                        "no": "4",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "膨出",
                        "no": "5",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "其他",
                        "no": "6",
                        "action": "",
                        "data": "",
                        "textbox": 1
                    }
                ],
                "no": "35",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1615958275652",
                "title": "近期（7天内）是否在服用抗凝药物？",
                "qTypeId": "q_radio",
                "timestamp": "1615958275652",
                "options": [
                    {
                        "title": "是",
                        "no": "1",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "否",
                        "no": "2",
                        "action": "",
                        "data": ""
                    }
                ],
                "no": "36",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "",
                "title": "心理状态",
                "qTypeId": "q_radio",
                "timestamp": "1611797852817",
                "options": [
                    {
                        "title": "镇静",
                        "no": "1",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "易激动",
                        "no": "2",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "焦虑",
                        "no": "3",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "恐惧",
                        "no": "4",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "沮丧",
                        "no": "5",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "无反应",
                        "no": "6",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "其他",
                        "no": "7",
                        "action": "",
                        "data": "",
                        "textbox": 1
                    }
                ],
                "no": "37",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797854501",
                "title": "社交能力",
                "qTypeId": "q_radio",
                "timestamp": "1611797854501",
                "options": [
                    {
                        "title": "愿意与人交往",
                        "no": "1",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "不愿与人交往",
                        "no": "2",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "其他",
                        "no": "3",
                        "action": "",
                        "data": "",
                        "textbox": 1
                    }
                ],
                "no": "38",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "1611797859133",
                "title": "家属关心",
                "qTypeId": "q_radio",
                "timestamp": "1611797859133",
                "options": [
                    {
                        "title": "关心",
                        "no": "1",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "一般",
                        "no": "2",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "冷漠",
                        "no": "3",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "其他",
                        "no": "4",
                        "action": "",
                        "data": "",
                        "textbox": 1
                    }
                ],
                "no": "39",
                "required": true,
                "data": "",
                "action": ""
            },
            {
                "qid": "0",
                "title": "本次服务项目所需的耗材是否齐全（缺少耗材需要在下面勾选出来，单独购买或由平台提供，费用自理）",
                "qTypeId": "q_check",
                "timestamp": "0",
                "options": [
                    {
                        "title": "创可贴",
                        "no": "1",
                        "action": "",
                        "data": ""
                    },
                    {
                        "title": "导尿管",
                        "no": "2",
                        "action": "",
                        "data": ""
                    }
                ],
                "no": "40",
                "required": false,
                "data": "",
                "action": ""
            }
        ],
        "id": 19
    }
}


export default assessFormData;
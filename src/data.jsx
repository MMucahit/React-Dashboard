export const user_columns = [
  {
    field: "id",
    headerName: "Id",
    width: 110,
  },
  {
    field: "employee_id",
    headerName: "Employee Id",
    width: 110,
  },
  {
    field: "name_surname",
    headerName: "Adı Soyadı",
    width: 180,
  },
  {
    field: "office_name",
    headerName: "Ofis Adı",
    width: 120,
  },
  {
    field: "active_point",
    headerName: "Aktiflik Puanı",
    width: 150,
  },
  {
    field: "gain_point",
    headerName: "Kazanç Puanı",
    width: 150,
  },
];

export const office_columns = [
  {
    field: "id",
    headerName: "Id",
    width: 110,
  },
  {
    field: "office_name",
    headerName: "Ofis Adı",
    width: 200,
  },
  {
    field: "A",
    headerName: "A",
    width: 120,
  },
  {
    field: "B",
    headerName: "B",
    width: 120,
  },
  {
    field: "C",
    headerName: "C",
    width: 120,
  },
  {
    field: "D",
    headerName: "D",
    width: 120,
  },
  {
    field: "E",
    headerName: "E",
    width: 120,
  },
];

export const history_columns = [
  {
    field: "id",
    headerName: "Id",
    width: 110,
  },
  {
    field: "employee_id",
    headerName: "Employee Id",
    width: 110,
  },
  {
    field: "saved_date",
    headerName: "Kayıt Tarihi",
    width: 180,
  },
  {
    field: "active_point",
    headerName: "Aktiflik Puanı",
    width: 150,
  },
  {
    field: "gain_point",
    headerName: "Kazanç Puanı",
    width: 150,
  },
  {
    field: "predictions",
    headerName: "Tahmin",
    width: 150,
  },
];

export const history_filter = (props, page, pageSize) => {
  return `http://127.0.0.1:8000/data_history`;
};

export const user_filter = (props, page, pageSize) => {
  return `http://127.0.0.1:8000/datas?active_point=${
    props?.filterData.activePoint
  }&gain_point=${props?.filterData.gainPoint}&page=${
    page + 1
  }&size=${pageSize}`;
};

export const office_filter = (props, page, pageSize) => {
  return `http://127.0.0.1:8000/offices?office_name=${props?.filterData.map(
    (office) => office.office_name
  )}&page=${page + 1}&size=${pageSize}`;
};

export const office_filter_without_paginate = () => {
  return "http://127.0.0.1:8000/get_office_without_pagination";
};

export const areaChartPointdata = {
  title: "A - B - C - D - E",
  position: { x: 720, y: -80 },
  dataKeyColor: [
    { color: "#45FFCA", key: "A" },
    { color: "#FEFFAC", key: "B" },
    { color: "#FFB6D9", key: "C" },
    { color: "#D67BFF", key: "D" },
    { color: "#7743DB", key: "E" },
  ],
  chartData: [
    {
      name: "2023-05-11",
      A: 2409,
      B: 1328,
      C: 878,
      D: 920,
      E: 2619,
    },
    {
      name: "2023-12-11",
      A: 1931,
      B: 1643,
      C: 1273,
      D: 1337,
      E: 1970,
    },
    {
      name: "2023-19-11",
      A: 2556,
      B: 1218,
      C: 970,
      D: 1089,
      E: 2615,
    },
  ],
};

export const areaChartGaindata = {
  title: "A - B - C",
  position: { x: 310, y: -80 },
  dataKeyColor: [
    { color: "#7743DB", key: "A" },
    { color: "#D67BFF", key: "B" },
    { color: "#FFB6D9", key: "C" },
  ],
  chartData: [
    {
      name: "2023-05-11",
      A: 2409,
      B: 1328,
      C: 878,
    },
    {
      name: "2023-12-11",
      A: 1931,
      B: 1643,
      C: 1273,
    },
    {
      name: "2023-19-11",
      A: 1538,
      B: 2003,
      C: 645,
    },
  ],
};

export const chartBoxDE = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Toplam D-E Kullanıcı Sayısı",
  number: 3704,
  dataKey: "value",
  percentage: (((3704 - 3307) / 3307) * 100).toPrecision(2),
  chartData: [
    { name: "2023-05-11", value: 3539 },
    { name: "2023-12-11", value: 3307 },
    { name: "2023-19-11", value: 3704 },
  ],
};

export const chartBoxABC = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Toplam A-B-C Kullanıcı Sayısı",
  number: 4744,
  dataKey: "value",
  percentage: (((4744 - 4847) / 4847) * 100).toPrecision(2),
  chartData: [
    { name: "Sun", value: 4615 },
    { name: "Mon", value: 4847 },
    { name: "Mon", value: 4744 },
  ],
};

export const barChartBoxED = {
  title: "Bölgelere Göre D-E",
  color: "#FF8042",
  dataKeyColor: [
    { color: "#8470ff", key: "D" },
    { color: "#54ff9f", key: "E" },
  ],
  chartData: [
    {
      name: "1",
      D: 509,
      E: 714,
    },
    {
      name: "2",
      D: 262,
      E: 389,
    },
    {
      name: "3",
      D: 208,
      E: 265,
    },
    {
      name: "4",
      D: 188,
      E: 325,
    },
    {
      name: "5",
      D: 119,
      E: 218,
    },
    {
      name: "6",
      D: 51,
      E: 59,
    },
  ],
};

export const barChartBoxABC = {
  title: "Bölgelere Göre A-B-C",
  color: "#FF8042",
  dataKeyColor: [
    { color: "#8470ff", key: "A" },
    { color: "#54ff9f", key: "B" },
    { color: "#00688b", key: "C" },
  ],
  chartData: [
    {
      name: "1",
      A: 617,
      B: 542,
      C: 468,
    },
    {
      name: "2",
      A: 361,
      B: 278,
      C: 218,
    },
    {
      name: "3",
      A: 346,
      B: 291,
      C: 226,
    },
    {
      name: "4",
      A: 237,
      B: 282,
      C: 189,
    },
    {
      name: "5",
      A: 154,
      B: 155,
      C: 105,
    },
    {
      name: "6",
      A: 216,
      B: 95,
      C: 67,
    },
  ],
};

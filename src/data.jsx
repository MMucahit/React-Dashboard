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

export const user_columns_mobile = [
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
  return `https://fastapi-app-async-ftqcb6wz6q-uc.a.run.app/data_history`;
};

export const user_filter = (props, page, pageSize) => {
  return `https://fastapi-app-async-ftqcb6wz6q-uc.a.run.app/datas?active_point=${
    props?.filterData.activePoint
  }&gain_point=${props?.filterData.gainPoint}&page=${
    page + 1
  }&size=${pageSize}`;
};

export const office_user_filter = (props, page, pageSize) => {
  return `https://fastapi-app-async-ftqcb6wz6q-uc.a.run.app/get_by_employee_office/${
    props?.filterData.office_name
  }?page=${page + 1}&size=${pageSize}`;
};

export const office_filter = (props, page, pageSize) => {
  return `https://fastapi-app-async-ftqcb6wz6q-uc.a.run.app/offices?office_name=${props?.filterData.map(
    (office) => office.office_name
  )}&page=${page + 1}&size=${pageSize}`;
};

export const office_filter_without_paginate = () => {
  return "https://fastapi-app-async-ftqcb6wz6q-uc.a.run.app/get_office_without_pagination";
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
      name: "14-11-2023",
      A: 1856,
      B: 1311,
      C: 636,
      D: 323,
      E: 60,
    },
    {
      name: "19-11-2023",
      A: 2079,
      B: 1250,
      C: 532,
      D: 260,
      E: 65,
    },
    {
      name: "26-11-2023",
      A: 1792,
      B: 1382,
      C: 653,
      D: 295,
      E: 64,
    },

    {
      name: "03-12-2023",
      A: 2079,
      B: 1250,
      C: 532,
      D: 260,
      E: 65,
    },
  ],
};

export const chartBoxDE = {
  color: "teal",
  title: "Toplam D-E Kullanıcı Sayısı",
  number: 325,
  dataKey: "value",
  percentage: (((325 - 359) / 359) * 100).toPrecision(2), // (son - (son - 1) / (son - 1) * 100)
  chartData: [
    { name: "14-11-2023", value: 383 },
    { name: "19-11-2023", value: 325 },
    { name: "26-11-2023", value: 359 },
    { name: "03-12-2023", value: 325 },
  ],
};

export const chartBoxABC = {
  color: "gold",
  title: "Toplam A-B-C Kullanıcı Sayısı",
  number: 3861,
  dataKey: "value",
  percentage: (((3861 - 3827) / 3827) * 100).toPrecision(2), // (son - (son - 1) / (son - 1) * 100)
  chartData: [
    { name: "14-11-2023", value: 3803 },
    { name: "19-11-2023", value: 3861 },
    { name: "26-11-2023", value: 3827 },
    { name: "03-12-2023", value: 3861 },
  ],
};

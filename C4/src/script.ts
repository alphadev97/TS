// type obj = {
//   height: number;
//   weight: number;
//   gender?: boolean; // Question mark for optional type
// };

interface obj {
  height: number;
  weight: number;
  gender?: boolean; // Question mark for optional type
}

interface newObj extends obj {
  scholer: boolean;
}

const gigi: newObj = {
  height: 254,
  weight: 541,
  scholer: true,
};

const obj: obj = {
  height: 244,
  weight: 342,
  gender: true,
};

const obj2: obj = {
  height: 354,
  weight: 542,
  gender: false,
};

const obj3: obj = {
  height: 354,
  weight: 542,
};

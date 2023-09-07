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

type FuncType = (n: number, m: number) => void;

interface newObj extends obj {
  scholer: boolean;
  func: FuncType;
}

const gigi: newObj = {
  height: 254,
  weight: 541,
  scholer: true,
  func: (n, m) => {
    console.log(n * m);
  },
};

const kendla: newObj = {
  height: 545,
  weight: 456,
  scholer: true,
  func: (n, m) => {
    console.log(n * m);
  },
};

kendla.func(10, 10);

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

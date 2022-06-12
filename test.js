// let str = "asd.mdx";
// console.log(str);
// console.log(str.replace(/\.mdx$/, ""));

// get staticpaths return 값 어떻게 되나 궁금해서
let list = ["aaa", "bbb", "ccc", "ddd", "eee"];
// let result = {
//     paths: list.map((str) => {
//         return {
//             params: {
//                 umm: str,
//             },
//         };
//     }),
// };

let result = {
    paths: list.map((str) => {
        return list.map((str) => {
            return {
                params: {
                    umm: str,
                },
            };
        });
    }),
};

console.log(result);
// {
//     paths: [
//       { params: [Object] },
//       { params: [Object] },
//       { params: [Object] },
//       { params: [Object] },
//       { params: [Object] }
//     ]
//   }

// let data = {
//     a: "aaa",
//     b: "bbb",
//     c: "ccc",
//     d: "ddd",
// };
// let b = "b2b2";

// let data1 = {
//     ...data,
//     b,
// };

// console.log(data1);

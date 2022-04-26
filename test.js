let a = 'https://firebird@allaravel.com:443/forum/questions/?search=vuejs+tutorial&paged=2#top';

let encode = encodeURIComponent(a);
console.log(encode);
let decode = decodeURIComponent(encode);
console.log(decode);
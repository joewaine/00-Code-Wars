solution 1:

const validatePIN = u => /^[0-9]{4}$|^[0-9]{6}$/.test(u);

solution 2:

const capitalize = (s) => { let r = [], r2 = [], up = (y) => y.toUpperCase(); s.split('').forEach((x,i) => { if(i % 2 == 0){ r2.push(up(x)); r.push(x); }else{ r2.push(x); r.push(up(x)); } i++; }); return [r2.join(''), r2.join('')]; }


solution 2 with regex:

const capitalize = (s) => {
    let r = [],
        r2 = [],
        u = (y) => y.toUpperCase(),
        d = (y) => y.toLowerCase(),
        s1 = (z,z2,y) => { z.push(y); z2.push(u(y));},
        s2 = (z,z2,y) => {z.push(y); z2.push(d(y));}
        s.split('').forEach((x,i) => {
        i % 2 == 0 ? /[a-z]/.test(x) ? s1(r,r2,x) : s2(r,r2,x) : /[a-z]/.test(x) ? s1(r2,r,x) : s2(r2,r,x)
      });
      return [r2.join(''), r.join('')];
  }

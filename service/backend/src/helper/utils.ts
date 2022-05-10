export const toUnique = <T>(arr: T[]) => [...new Set(arr)].sort();

// https://www.bsidesoft.com/8517
export const koFuzzyLike = (() => {
  const reESC = /[\\^$.*+?()[\]{}|]/g;
  const reChar = /[가-힣]/;
  const reJa = /[ㄱ-ㅎ]/, offset = 44032;
  const con2syl = Object.fromEntries('ㄱ:가,ㄲ:까,ㄴ:나,ㄷ:다,ㄸ:따,ㄹ:라,ㅁ:마,ㅂ:바,ㅃ:빠,ㅅ:사'.split(",").map(v=>{
    const entry = v.split(":");
    entry[1] = entry[1].charCodeAt(0) as any;
    return entry;
  }));
  const pattern = ch =>{
    let r;
    if(reJa.test(ch)){
      const begin = con2syl[ch] || ((ch.charCodeAt(0) - 12613) * 588 + con2syl['ㅅ']);
      const end = begin + 587;
      r = `[${ch}\\x{${begin.toString(16)}}-\\x{${end.toString(16)}}]`;
    }else if(reChar.test(ch)){
      const chCode = ch.charCodeAt(0) - offset;
      if(chCode % 28 > 0) return ch;
      const begin = Math.floor(chCode / 28) * 28 + offset;
      const end = begin + 27;
      r = `[\\x{${begin.toString(16)}}-\\x{${end.toString(16)}}]`;
    }else r = ch.replace(reESC,'\\$&');
    return `(${r})`;
  };
  return (str: string) => str?.split('').map(pattern).join('.*?') ?? '';
})();
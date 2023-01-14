// object Destucturing
// matlab object ko todna parts mai
const band ={
         bandName:"led zeppelin",
         famousSong:"strairway to heaven",
         Year:1920,
         anotherFamousSong:"KAshmir"
};
// const bandName = band.bandName;
// const famousSong = band.famousSong;
// or
// const{bandName,famousSong} = band;

let {bandName,famousSong,...restProp} = band;

console.log(bandName);
console.log(restProp)
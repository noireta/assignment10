//STEP 1

function alph_order(pass_str)
  {
    return pass_str.split('').sort().join('');
  }

let passString = prompt("Please enter any word");
console.log(alph_order(passString));

//STEP 2

let str = "the quick brown fox";
let arr = str.split(' ');
let convertedText="";
for(let a = 0; a < arr.length; a++){
    let uWord = upper(arr[a]) 
    if ( a == 0)
    {
        convertedText = convertedText + uWord;
    }
    else{
        convertedText = convertedText + " " + uWord
    }
    
}

console.log(convertedText);

function upper (asd){
    return asd.charAt(0).toUpperCase() + asd.slice(1);
}

//STEP 3

let exampleText = "The quick brown fox ";

function vowel_count(targetText)
{
    let vowel_list = 'aeiouAEIOU';
    vcount = 0;
    for (let x = 0; x < targetText.length ; x++)
    {
       
        let lettPos = vowel_list.indexOf(targetText[x]); // lettPos = -1
        if ( lettPos  !== -1)
        {
            vcount = vcount +1;
        }
    }

    return vcount;
}

let finalCount = vowel_count(exampleText);

console.log(finalCount);

//STEP 4

function generates(strLength)
{
    let  text = " ";
    let text_target = "abcdefghifklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTVWXYZ0123456789";

    for (let i = 0 ; i < strLength ; i++){

      text += text_target.charAt(Math.floor(Math.random() * text_target.length));
    }
   return text;

}

let finalResults = generates (26);
console.log( finalResults);

//STEP 5

let country_name = prompt ("Please enter comma separated list of Country Names");

function Longest_Country(cList){
 let countryArr = cList.split(',');
 let cMaxL = 0;
 let cMaxInd = -1
 for (let i = 0; i < countryArr.length ; i++) {
     if ( countryArr[i].length > cMaxL )
     {
         cMaxL = countryArr[i].length;
         cMaxInd = i;
     }
    }
  return countryArr[cMaxInd];
}

console.log(Longest_Country(country_name))


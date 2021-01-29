// const div1 = document.querySelector('.div1')
// const div2 = document.querySelector('.div2')
// const div3 = document.querySelector('.div3')
// const div4 = document.querySelector('.div4')
// const div5 = document.querySelector('.div5')
// const div6 = document.querySelector('.div6')
// const div7 = document.querySelector('.div7')
// // console.log(div1,div2,div3,div4,div5,div6,div7)




// var arr = [div1,div2,div3,div4,div5,div6,div7]  //获取数组

const divArr = document.querySelectorAll('div')
let n = 1 
for(let i=0;i<divArr.length;i++){
    divArr[i].addEventListener('click',fn2,true)
    divArr[i].addEventListener('click',fn)
}


function fn(e){
    const t = e.currentTarget
    setTimeout(()=>{
     // console.log(e.currentTarget) //e.currentTarget只有在点击的瞬间才有
        t.classList.add('x')
    },n * 500)
    n+=1
    console.log('fn:'+n)
    // if(-n < arr.length){
    //     n+=1
    // }
 }

 function fn2(e){
    const t = e.currentTarget
    setTimeout(()=>{
     // console.log(e.currentTarget) //e.currentTarget只有在点击的瞬间才有
        t.classList.remove('x')
    },n * 500)
    n+=1
    console.log('fn2:'+n)
    // if(n<=arr.length){
    //     n+=1
    // } 
 }




// div1.addEventListener('click',fn)
// div2.addEventListener('click',fn)
// div3.addEventListener('click',fn)
// div4.addEventListener('click',fn)
// div5.addEventListener('click',fn)
// div6.addEventListener('click',fn)
// div7.addEventListener('click',fn)

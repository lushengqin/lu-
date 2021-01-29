// const button = document.querySelector('.button1')
// console.log(button)
// button.addEventListener('click',()=>{
//     const event = new CustomEvent('lulu',{
//         detail:{name:'frank',age:'18'},
//         bubbles:true , //是否取消冒泡
//         composed:false //是否阻止冒泡 不阻止

//     })
//     button.dispatchEvent(event)
// })

// div1.addEventListener('lulu',(e)=>{
//     console.log(e.detail)

// })

// 100个buuton写法
// box.addEventListener('click',(e)=>{
//     const t = e.target
//     // console.log(t)
//     if(t.tagName.toLowerCase() === 'button'){
//         console.log(222)
//         // console.log('button被点击了，我的内容是：'+ t.textContent)
//         console.log('button被点击了，我的内容是：data-id='+ t.dataset.id)
//     }
    
// })

// 获取暂时不存在的元素
// setTimeout(()=>{
//     const button= document.createElement('button')
//     button.textContent = '我是button内容'
//     // console.log(button)
//     box.appendChild(button)
// },1000)
// box.addEventListener('click',(e)=>{
//     const t = e.target
//     if(t.tagName.toLowerCase()==='button'){
//         console.log('被点击')
//     }
// })



// 封装一个函数
// 1 写出这样一个函数on('click','#testDiv','li',fn) 2 当用户点击#testDiv里面的li远不时，调用fn函数  3 要求用到事件委托

// setTimeout(()=>{
//     const button = document.createElement('button')
//     button.textContent = '我是动态1000s后button里面的内容'
//     box.appendChild(button)
// },1000)

// on('click','#box','button',()=>{
//     console.log('元素被点击了')
// })

// function on(eventType,element,selector,fn){
//     if(!(element instanceof Element)){ //判断这个元素是不是一个元素 ！表示取反
//         element = document.querySelector(element)
//     }
//     element.addEventListener(eventType,(e)=>{
//         const t = e.target
//         if(t.matches(selector)){ // 用来判断一个元素是否为选择器  比如一个元素是不是button 是不是div  是不是body html 等
//             fn(e)
//         }
//     })
// }



setTimeout(() => {
    const button = document.createElement('button')
    button.textContent = '第三次试验'
    box.appendChild(button)
}, 1000);

on('click','#box','button',()=>{
    console.log('点击后执行的放这里')
})

function on(eventType,element,selector,fn){
    if(!(element instanceof Element)){
        element = document.querySelector(element)
    }
    element.addEventListener(eventType,(e)=>{
        const t = e.target
        if(t.matches(selector)){
            fn()
            // console.log(fn(e))
            // console.log(fn)
        }
    })
}
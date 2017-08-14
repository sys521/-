/**
 * Created by Administrator on 2017/8/4 0004.
 */

document.querySelector('.yazhu').addEventListener('click',function(){
    var arr=['show1','show2','show3','show4','show5','show6']
    var random=Math.floor(Math.random()*6)
    var cube=document.querySelector('.lifangti')
    if(arr[random]===arr[0]){
        cube.style.transform='rotateX(0deg) rotateY(0deg) rotateZ(0deg) '
    }else if(arr[random]===arr[1]){
        cube.style.transform='rotateX(0deg) rotateY(90deg) rotateZ(0deg) '
    }else if(arr[random]===arr[2]){
        cube.style.transform='rotateX(-90deg) rotateY(0deg) rotateZ(0deg) '
    }else if(arr[random]===arr[3]){
        cube.style.transform='rotateX(90deg) rotateY(0deg) rotateZ(0deg) '
    }else if(arr[random]===arr[4]){
        cube.style.transform='rotateX(0deg) rotateY(-90deg) rotateZ(0deg) '
    }else if(arr[random]===arr[5]){
        cube.style.transform='rotateX(180deg) rotateY(0deg) rotateZ(0deg) '
    }
})
export const checkAuth = (require,response,next)=>{
    const isAdmin = true;
    if(isAdmin){
        console.log('xin chào admin');
        next()
    }else{
        console.log('Bạn không có quyền truy cập');
    }

    
}
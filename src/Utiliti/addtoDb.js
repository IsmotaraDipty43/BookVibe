const getStoreReadList =()=>{
 const storeListStr = localStorage.getItem('read-list')
 if(storeListStr){
     const storeList = JSON.parse(storeListStr);
     return storeList;
 }
else{
return [];
}

}
const addtoStoreReadList =(id)=>{
    const storeList = getStoreReadList();
    if(storeList.includes(id)){
        console.log('already added');
    }else{
        storeList.push(id);
        const storeListStr = JSON.stringify(storeList)
        localStorage.setItem('read-list', storeListStr)
    }
}
export {addtoStoreReadList, getStoreReadList}
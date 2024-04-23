import request from "../api/axios";

//普通搜索:key搜索关键字. pageNo页码. pagesize每页数量
export const Search = (data) => {
    return request.get("/search", {
        params:{
            key:data.key,
            pageNo:data.pageNo,
            pageSize: data.pagesize,
            t:data.t
        },
    });
};

//获取用户创建的歌单:id:qq号
export const getUserSongList = (data) => {
    return request.get("/user/songlist", {
        params:{
            id:data.uid
        },
    });
}


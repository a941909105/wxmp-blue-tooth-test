// {{page}}.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 蓝牙列表
        blueToothList: [],
        // 搜索关键字
        searchTags: [],
        // 当前输入内容
        searchText: ""
    },
    // 绑定搜索控件
    bindSearchInput: function (e) {
        this.setData({
            searchText: e.detail.value
        });
    },
    // 删除搜索关键字
    bindRemoveSearchTag(e) {
        const tag = e.currentTarget.dataset.tag;
        this.setData({
            searchTags: this.data.searchTags.filter(item => item !== tag)
        })
    },
    // 添加搜索关键字
    bindAddSearchTag: function () {
        this.setData({
            searchTags: [...this.data.searchTags, this.data.searchText],
            searchText: ""
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    behaviors:[Behavior({
        observers:{
            searchTags(v,o){
                console.log(v,o);
            }
        }
    })],
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
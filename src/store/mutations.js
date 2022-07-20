const mutations = {
  SET_Admin(state, val) {
		state.Admin= val
  },
  SET_Nickname(state, val) {
    state.Admin.Nickname=val
  },
  SET_Sex(state, val) {
    state.Admin.Sex=val
  },
  SET_Phone_get(state, val) {
    state.Admin.Phone_get=val
  },
  SET_Address(state, val) {
    state.Admin.Address_get=val
  },
  SET_Birth(state, val) {
    state.Admin.Birth=val
  },
}
 

export default mutations;
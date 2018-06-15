
export default function(state="Home Page Text", action){
	if(action.type === "UPDATE_HOME"){
		return action.payload;
	}
	return state;

}
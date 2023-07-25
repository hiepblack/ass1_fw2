/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { DELETE_PRODUCT, SET_TODO_INPUT, GETALL_PRODUCT, UPDATE_PRODUCT } from "./constant";
export const setInput = (payload: any) => ({
	type: SET_TODO_INPUT,
	payload,
});
export const deleteProduct = (payload: any) => ({
	type: DELETE_PRODUCT,
	payload,
});
export const getallproducts = (payload: any) => ({
	type: GETALL_PRODUCT,
	payload,
});
export const updateproduct = (payload: any) => ({
	type: UPDATE_PRODUCT,
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	payload,
});
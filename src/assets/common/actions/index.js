export const REMOVE = "REMOVE";
export const ADDTOCART = "ADDTOCART";
export const UPDATEQUANTITY = "UPDATEQUANTITY";
export const REMOVEALL = "REMOVEALL";
export function addtocart() {
  return {
    type: "ADDTOCART",
  };
}
export function updatequantity() {
  return {
    type: "UPDATEQUANTITY",
  };
}
export function remove() {
  return {
    type: "REMOVE",
  };
}
export function removeall() {
  return {
    type: "REMOVEALL",
  };
}

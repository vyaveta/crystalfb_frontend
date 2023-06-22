export const regx = {
  email: new RegExp(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/),
  name: new RegExp(/^[aA-zZ\s]+$/), 
  number: new RegExp(/^\d*\.?\d*$/),
  numbersBetween1to100: new RegExp(/^([1-9]|[1-9][0-9]|100)$/),
  postiveNumber: new RegExp(/^[1-9]\d*$/g),
  emptySpace: new RegExp(/(.|\s)*\S(.|\s)*/),
  phoneNumber: new RegExp(/^[0-9]{10,}$/),
  letter: new RegExp(/^[a-zA-Z ]*$/),
  url: new RegExp(
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  ),
  urlWithoutHttp: new RegExp(
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\\=]*)?/gi
  ),
  imageElement: new RegExp(/<img[^>]+src="(http:\/\/[^">]+)"/g),
  imageExtention: new RegExp(/\.(gif|jpe?g|tiff?|png|webp|bmp|svg)$/i),
  pdfExtention: new RegExp(/^.+\.(([pP][dD][fF])|([jJ][pP][gG]))$/),
};

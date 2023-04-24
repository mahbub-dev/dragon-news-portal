const displayTextSize=(text='')=>{
 const texts = text.split(' ').slice(0,45).join(' ') + '...'
 return texts
}
export {displayTextSize}
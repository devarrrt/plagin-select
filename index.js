import { Select } from './select/select'
import './style/styles.scss'
 


const select = new Select( '#select', {
placeholder: "Выбери нужный элемент ",
data: [
	{ id: '1', value: 'React' },
	{ id: '2', value: 'Redux' },
	{ id: '3', value: 'JS' },
	{ id: '4', value: 'TS' },
],
onSelect( item ) {
	console.log( 'Selected item', item );
}
})


window.s = select


//parcel index.html

const getTemplate = ( data=[],  placeholder ) => {

		const items = data.map( (el) => {
			return `<li class="select__item"
			data-type='item' data-value="${el.id}"
			> ${ el.id }.  ${ el.value } </li>`
		} )
	const text = placeholder ?? 'text '

	return `
	<div class="select__back" data-type="back"> </div>
	<div class="select__input" data-type="input">
	<span data-type="value" > ${text} </span>
 <i class="fa fa-chevron-down" data-type="arrow"></i> 
</div>
<div class="select__dropdown"> 
 <ul class="select__list">  
	${ items.join('') }
 </ul>  
</div>	`
}


export class Select {
  constructor( selector, options ) {
		this.el = document.querySelector(selector)
		this.options = options
		this.selectedId = null

		this.#render()
		this.#setup()
	}


#render(){
	const { data,  placeholder } = this.options
	this.el.classList.add('select')
	this.el.innerHTML = getTemplate(data, placeholder)
}

#setup(){
	this.clickHandler = this.clickHandler.bind(this)
	this.el.addEventListener( 'click',  this.clickHandler)
	this.arrow = this.el.querySelector('[data-type="arrow"]')
	this.value = this.el.querySelector('[data-type="value"]')
}

clickHandler(e){
	const { type } = e.target.dataset

	if ( type === "input" ) {
		this.togle()
	}	else if ( type === 'item' ) {
		const id = e.target.dataset.value
		this.select(id)
	} else if ( type === "back" ){
		this.close()
	}
}

select(id) {
this.selectedId = id
this.value.textContent = this.current.value

this.el.querySelectorAll( '[data-type="item"]' ).forEach( el => {
	el.classList.remove('selected')
})
this.options.onSelect ? this.options.onSelect( this.current ) : null

this.close()
}

get current(){
	return this.options.data.find( item => item.id === this.selectedId )
}

get isOpen(){
	return this.el.classList.contains( 'open' )
}

togle(){
	 this.isOpen ? this.close() : this.open()
}


open(){
	this.el.classList.add('open')
	this.arrow.classList.remove( 'fa-chevron-down' )
	this.arrow.classList.add( 'fa-chevron-up' )
}


close(){
	this.el.classList.remove('open')
	this.arrow.classList.add( 'fa-chevron-down' )
	this.arrow.classList.remove( 'fa-chevron-down' )
}

destroy () {
	this.el.removeEventListener( 'click',  this.clickHandler )

}
}

//40

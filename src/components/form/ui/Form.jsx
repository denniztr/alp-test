import './form.scss'

export const Form = () => {
  return (
    <form action="" className='form'>
      <input className='form__input' type="text" placeholder='Фамилия' />
      <input className='form__input' type="text"  placeholder='Имя' />
      <input className='form__input' type="text" placeholder='Отчество' />
      <div className='form-button'>
        <button className='form-button__button'>Отправить</button>
      </div>
    </form>
  )
}
import styles from './AllMenu.module.css'

const AllMenu = () => {
  return (
    <div className={`${styles.all_menu}`}>
      <div className="all_menu_header">Menu</div>
      <div className="all_menu_wrap scrollbar">
        <div className="all_left">
          <div className="all_menu_search">
            <i className="amm_s_ic"></i>
            <input type="text" placeholder='Search Menu' />
          </div>
          <div className="all_menu_group">
            <div className="all_menu_group_header">Social</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllMenu
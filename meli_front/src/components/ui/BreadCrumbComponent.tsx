
export const BreadCrumbComponent = ({ categories }: any) => {
  return (
    <div className="breadcrumb">
      <nav>
        <ol>
          {categories && categories.map((category: any) => (
            <li key={category}>
              {category}
            </li>))}
          {categories.length === 0 && 
            (<li> No Categories </li>)}
        </ol>
      </nav>
    </div>
  )
}

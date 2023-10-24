import { useState } from 'react'
import './App.css'
import { categories, videos } from './data/home'
import { CategoryPills } from './layouts/categoryPills/CategoryPills'
import { PageHeader } from './layouts/pageHeader/PageHeader'
import { VideoGrid } from './components/videoGrid/VideoGrid'
import { Sidebar } from './layouts/sideBar/SideBar'
import { SidebarProvider } from './context/sideBarContext'

function App() {

  const [selectCategory, setSelectCategory] = useState(categories[0])

  return (
    <SidebarProvider>
      <div className="max-h-screen flex flex-col">
        <PageHeader/>
        <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
          <Sidebar />
          <div className="overflow-x-hidden px-8 pb-4">
            <div className="sticky top-0 bg-white z-10 pb-4">
              <CategoryPills
                categories={categories}
                selectedCategory={selectCategory}
                onSelect = {setSelectCategory}
              />
            </div>
            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
              {videos.map(video => {
                return (
                  <VideoGrid key={video.id} {...video} />
                )
              })}
            
            </div>
          </div>
          
        </div>
      </div>
    </SidebarProvider>
  )
}

export default App

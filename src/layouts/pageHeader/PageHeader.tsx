import LOGO from '../../assets/Logo.png'
import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from 'lucide-react'
import { Buttons } from '../../components/button/Buttons'
import { useState } from 'react'
import { useSidebarContext } from '../../context/sideBarContext'

export const PageHeader = () => {

    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)

    return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <PageHeaderFirstSection hidden={showFullWidthSearch} />
      <form
        className={`gap-4 flex-grow justify-center ${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        }`}
      >
        {showFullWidthSearch && (
          <Buttons
            onClick={() => setShowFullWidthSearch(false)}
            type="button"
            size="icon"
            variant="ghost"
            className="flex-shrink-0"
          >
            <ArrowLeft />
          </Buttons>
        )}
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />
          <Buttons className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0">
            <Search />
          </Buttons>
        </div>
        <Buttons type="button" size="icon" className="flex-shrink-0">
          <Mic />
        </Buttons>
      </form>
      <div
        className={`flex-shrink-0 md:gap-2 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Buttons
          onClick={() => setShowFullWidthSearch(true)}
          size="icon"
          variant="ghost"
          className="md:hidden"
        >
          <Search />
        </Buttons>
        <Buttons size="icon" variant="ghost" className="md:hidden">
          <Mic />
        </Buttons>
        <Buttons size="icon" variant="ghost">
          <Upload />
        </Buttons>
        <Buttons size="icon" variant="ghost">
          <Bell />
        </Buttons>
        <Buttons size="icon" variant="ghost">
          <User />
        </Buttons>
      </div>
    </div>
  )
}

type PageHeaderFirstSectionProps = {
  hidden?: boolean
}

export function PageHeaderFirstSection({
  hidden = false,
}: PageHeaderFirstSectionProps) {
  const { toggle } = useSidebarContext()

  return (
    <div
      className={`gap-4 items-center flex-shrink-0 ${
        hidden ? "hidden" : "flex"
      }`}
    >
      <Buttons onClick={toggle} variant="ghost" size="icon">
        <Menu />
      </Buttons>
      <a href="/">
        <img src={LOGO} className="h-6" />
      </a>
    </div>
  )
}
'use client'

import { useSearchParams } from 'next/navigation'

export default function SortProducts() {
    const searchParams = useSearchParams()
    console.log(searchParams)
    function updateSorting(sortOrder) {
        const params = new URLSearchParams(searchParams.toString())
        params.set('sort', sortOrder)
        window.history.pushState(null, '', `?${params.toString()}`)
    }

    return (
        <div className='flex gap-x-[30px]'>
            <button onClick={() => updateSorting('asc')}>Sort Ascending</button>
            <button onClick={() => updateSorting('desc')}>Sort Descending</button>
        </div>
    )
}


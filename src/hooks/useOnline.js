"use client"

import { useEffect, useRef, useState } from "react"

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true)
    const [offlineTime, setOfflineTime] = useState(null)
    const [offlineDuration, setOfflineDuration] = useState(null)
    const intervalRef = useRef(null)

    function handleOnline() {
        setIsOnline(true)

        // Calculate how long we were offline
        // if (offlineTime) {
        //     const duration = Date.now() - offlineTime

        //     setOfflineDuration(duration)
        // }

        setOfflineTime(null)

        // Clear the interval when back online
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
        }
    }

    function handleOffline() {
        setIsOnline(false)
        const now = Date.now()
        setOfflineTime(now)
        setOfflineDuration(null)

        // Start tracking offline duration in real-time
        intervalRef.current = setInterval(() => {
            setOfflineDuration(Date.now() - now)
        }, 1000) // Update every second
    }

    useEffect(() => {
        console.log("Setting up event listeners for online/offline status")
        window.addEventListener("online", handleOnline)
        window.addEventListener("offline", handleOffline)


        return () => {
            console.log("Cleaning up event listeners")
            window.removeEventListener("online", handleOnline)
            window.removeEventListener("offline", handleOffline)
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [])

    // Helper function to format duration
    const formatDuration = (ms) => {
        if (!ms) return null

        const seconds = Math.floor(ms / 1000)
        const minutes = Math.floor(seconds / 60)
        const hours = Math.floor(minutes / 60)

        if (hours > 0) {
            return `${hours}h ${minutes % 60}m `
        } else if (minutes > 0) {
            return `${minutes}m `
        } else {

            // ${seconds % 60}s
            return `${seconds}s`
            // return `${minutes}m `
        }
    }

    return {
        isOnline,
        offlineDuration,
        formattedOfflineDuration: formatDuration(offlineDuration),
        offlineTime,
    }
}

export default useOnline
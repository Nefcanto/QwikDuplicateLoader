const useAsyncRequests = async (requests) => {
    const resolvedRequests = await Promise.all(requests)
    return resolvedRequests
}

export default useAsyncRequests

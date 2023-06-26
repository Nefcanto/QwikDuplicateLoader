import { getFromCacheOrApi } from 'Base'

const useGlobalization = async (query) => {

    const globalizationData = await getFromCacheOrApi(`/globalization/data`)
    const locale = query?.get('locale')
    let currentLocale = globalizationData.locales.find(i => i.key == locale)
    if (!currentLocale) {
        currentLocale = globalizationData.locale
    }

    return {
        ...globalizationData,
        currentLocale,
    }
}

export default useGlobalization

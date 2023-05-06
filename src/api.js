const fetchData = async (input, setError, setResult, setLoading) => {
    setError(false);
    setResult(null);
    try {
        setLoading(true);
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`);
        const [data] = await response.json();
        setResult(data);
    } catch (err) {
        console.error(err);
        setError(true);
    } finally {
        setLoading(false);
    }
};

export default fetchData
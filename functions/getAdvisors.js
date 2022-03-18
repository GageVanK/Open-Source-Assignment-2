const Airtable = require('airtable')

Airtable.configure({
    apiKey: 'key4cFwk1ynHHzTTL'
})
const base = require('airtable').base('appMJX941hoKvNNHg')
const table = base('Advisors')

exports.handler = async(event) => {
    const records = await table
        .select({filterByFormula:  'first != ""'})
        .firstPage();

    const formattedRecords = records.map((record) => ({
        id: record.id,
        fields: record.fields
    }))
    return {
        statusCode: 200,
        body: JSON.stringify(records),
    }
}
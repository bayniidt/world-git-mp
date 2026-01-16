// Cloud Function: addWord
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()

exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  
  try {
    const { word, definition, phonetic, example, partOfSpeech, labels } = event
    
    // Validate required fields
    if (!word || !definition) {
        return {
            success: false,
            errorMessage: 'Word and definition are required'
        }
    }

    const result = await db.collection('words').add({
      data: {
        _openid: wxContext.OPENID,
        word,
        definition,
        phonetic,
        example,
        partOfSpeech,
        labels,
        createdAt: db.serverDate(),
        updatedAt: db.serverDate()
      }
    })

    return {
      success: true,
      _id: result._id,
      message: 'Word added successfully'
    }
  } catch (err) {
    console.error(err)
    return {
      success: false,
      errorMessage: err.message || 'Failed to add word'
    }
  }
}

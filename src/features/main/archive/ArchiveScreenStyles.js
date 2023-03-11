import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  // libraryArchiveScreen 
  libraryArchive : {
    borderBottomWidth: 1,
    borderColor: 'rgba(38, 38, 38, 0.5)'
  },
  libraryArchiveItem : {
    paddingHorizontal: 18,
    marginBottom: 4
  },
  libraryBlogCount : {
    top: 8,
    left: 124
  }, 
  libraryArchiveBlog : {
    flexDirection: 'row',
    marginTop: 18, 
    marginBottom: 14, 
    alignItems: 'center'
  },
  libraryArchiveImageBlock : {
    flexDirection:'row'
  }, 
  libraryArchiveImage : {
    width: 70, 
    height: 70, 
    zIndex: 1, 
    borderRadius: 8,
    top :0
  }, 
  libraryArchiveAuthor : {
    flexDirection: 'row',
    alignItems: 'center', 
    marginTop: 16
  }, 
  libraryArchiveBlockImageAuthor: {
    flexDirection:'row', 
    alignItems:'center'
  }, 
  libraryGroupBtn: {
    flexDirection:'row', 
    justifyContent:'flex-end', 
    alignItems: 'center'
  },
  libraryBtn : {
    borderColor: '#262626', 
    borderWidth: 1, 
    justifyContent: 'center'
   }
});

export default styles
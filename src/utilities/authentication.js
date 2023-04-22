const USERNAME_RULE = /^[^\!\@\#\$\%\^\&\*\(\)\-\=\+\;\:\'\"\'\,\<\.\>\/\?\s\~\`A-Z]+$/;
const PASSWORD_RULE = /^[^\s]+$/;
const NAME_RULE = /^[ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴÝỶỸA-Z][ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹa-zA-Z]*(\s[ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹa-zA-Z]+)*\S$/;
const EMAIL_RULE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const USERNAME_RULE_ERROR_MESSAGE = `Username của người dùng:
1. Không được có khoảng trắng ở trước, sau hay ở trong username.
2. Không được có các ký tự đặc biệt !@#$%^&*()-=+;:'"',<.>/?s~\`\\.
3. Không được có các chữ cái in hoa từ A-Z.
`;
const PASSWORD_RULE_ERROR_MESSAGE = `Password của người dùng không được có khoảng trắng.`;
const NAME_RULE_ERROR_MESSAGE = `Tên của người dùng:
1. Không được có khoảng trắng ở trước, sau hay ở trong tên.
2. Không được có các ký tự đặc biệt !@#$%^&*()-=+;:'"',<.>/?s~\`\\.
3. Bắt đầu bằng chữ cái in hoa, không có quá 1 khoảng trẳng giữa các tên.
`;

const AUTHORIZE_TYPES = {
  VERIFICATION_CODE: "VERIFICATION_CODE",
  REFRESH_TOKEN: "REFRESH_TOKEN"
};

/**
 * Hàm này trả về một hàm check input cho các ô nhập dữ liệu.
 * Dựa vào `rule` và `callBack` mà nó nhận được. Nếu như `text` thoả
 * `rule` thì `passCallBack` sẽ được thực thi, ngược lại thì `failCallBack`
 * sẽ được thực thi.
 * 
 * `passCallBack` có input là `text` mà pass được test.
 * @param {RegExp} rule 
 * @param {(text: string) => void} passCallBack Function xử lý khi `text` thoả `rule`
 * @param {() => void} failCallBack Function xử lý khi `text` không thoả `rule`
 * @returns 
 */
function verifyInput(rule, passCallBack = text => {}, failCallBack = () => {}) {
  /**
   * @param {string} text
   */
  return function(text) {
    if(rule.test(text)) {
      passCallBack(text)
    } else failCallBack()
  }
}

const AuthUtility = {
  USERNAME_RULE,
  PASSWORD_RULE,
  NAME_RULE,
  EMAIL_RULE,
  USERNAME_RULE_ERROR_MESSAGE,
  PASSWORD_RULE_ERROR_MESSAGE,
  NAME_RULE_ERROR_MESSAGE,
  AUTHORIZE_TYPES,
  verifyInput
}

export default AuthUtility;
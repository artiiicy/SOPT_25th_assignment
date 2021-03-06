// responseMessage.js
module.exports = {
    NULL_VALUE: "필요한 값이 없습니다.",
    OUT_OF_VALUE: "파라미터 값이 잘못 되었습니다.",

    SIGN_UP_SUCCESS: "회원가입 성공",
    SIGN_UP_FAIL: "회원 가입 실패",
    SIGN_IN_SUCCESS: "로그인 성공",
    SIGN_IN_FAIL: "로그인 실패",
    ALREADY_ID: "존재하는 ID 입니다.",
    NO_USER: "존재하지 않는 유저 id 입니다.",
    MISS_MATCH_PW: "비밀번호가 일치하지 않습니다",

    POST_CREATE_SUCCESS: "게시글 작성 성공",
    POST_CREATE_FAIL: "게시글 작성 실패",
    POST_READ_ALL_SUCCESS: "게시글 전체 조회 성공",
    POST_READ_ALL_FAIL: "게시글 전체 조회 성공",
    POST_READ_SUCCESS: "게시글 조회 성공",
    POST_READ_FAIL: "게시글 조회 성공",
    POST_UPDATE_SUCCESS: "게시글 수정 성공",
    POST_UPDATE_FAIL: "게시글 수정 실패",
    POST_DELETE_SUCCESS: "게시글 삭제 성공",
    POST_DELETE_FAIL: "게시글 삭제 실패",
    NO_POST: "존재하지 않는 게시글 입니다.",
    ALREADY_POST: "존재하는 게시글 입니다.",

    X_CREATE_SUCCESS: (X) => `${X} 생성 성공`,
    X_CREATE_FAIL: (X) => `${X} 생성 실패`,
    X_READ_SUCCESS: (X) => `${X} 조회 성공`,
    X_READ_FAIL: (X) => `${X} 조회 실패`,
    X_READ_ALL_SUCCESS: (X) => `${X} 전체 조회 성공`,
    X_READ_ALL_FAIL: (X) => `${X} 전체 조회 실패`,
    X_UPDATE_SUCCESS: (X) => `${X} 수정 성공`,
    X_UPDATE_FAIL: (X) => `${X} 수정 실패`,
    X_DELETE_SUCCESS: (X) => `${X} 삭제 성공`,
    X_DELETE_FAIL: (X) => `${X} 삭제 실패`,
    INTERNAL_SERVER_ERROR: "서버 내부 오류"
}
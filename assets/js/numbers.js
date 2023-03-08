// Number Dictionary that is being used for reference
const number_dict = {
    0 : 'ศูนย์',
    1 : 'หนึ่ง',
    2 : 'สอง',
    3 : 'สาม',
    4 : 'สี่',
    5 : 'ห้า',
    6 : 'หก',
    7 : 'เจ็ด',
    8 : 'แปด',
    9 : 'เก้า',
    10 : 'สิบ',
    11 : 'สิบเอ็ด',
    20 : 'ยี่สิบ',
    21 : 'ยี่สิบเอ็ด',
    31 : 'สามสิบเอ็ด',
    41 : 'สี่สิบเอ็ด',
    51 : 'ห้าสิบเอ็ด',
    61 : 'หกสิบเอ็ด',
    71 : 'เจ็ดสิบเอ็ด',
    81 : 'แปดสิบเอ็ด',
    91 : 'เก้าสิบเอ็ด',
    100 : 'ร้อย',
    1000 : 'พัน',
}

function is_number_in_dict(number) {
    // Check if Supplied Number is in the Number Dict
    return number in number_dict;
}


module.exports = {number_dict, is_number_in_dict}

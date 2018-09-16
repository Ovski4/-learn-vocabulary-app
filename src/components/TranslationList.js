import React from 'react';
import TranslationEditionRow from './edition/TranslationEditionRow';
import TranslationRevisionRow from './revision/TranslationRevisionRow';
import { Text, TextInput, View, FlatList, Dimensions } from 'react-native';

class TranslationList extends React.PureComponent {

    render() {
        const RowComponents = {
            'edition': TranslationEditionRow,
            'revision': TranslationRevisionRow
        }

        const getListItem = (translation) => {
            return React.createElement(
                RowComponents[this.props.mode],
                {
                    key: translation.createdAt,
                    translation: translation
                }
            )
        };

        const listHeight = Dimensions.get('window').height *2 / 3 - 5;

        return (
            <View>
                <View style={{
                    alignItems: 'center',
                    margin: 5

                }}>
                    <Text style={{fontWeight: 'bold'}}>Translations</Text>
                </View>
                {/* <View style={{
                        backgroundColor: '#eeeeee',
                        borderRadius: 2,
                        paddingLeft: 5,
                        marginLeft: 5,
                        marginRight: 5,
                        marginBottom: 5
                    }}>
                        <TextInput
                            underlineColorAndroid="transparent"></TextInput>
                </View> */}
                <View style={{
                    height: listHeight,
                    borderTopWidth: 0.5,
                    borderColor: '#bbb'
                }}>
                    <FlatList
                        data={this.props.translations}
                        extraData={this.props.mode}
                        renderItem={({item}) => getListItem(item)}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>
        );
    }
}

export default TranslationList;

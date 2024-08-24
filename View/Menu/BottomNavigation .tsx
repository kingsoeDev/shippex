import React from 'react'
import { View, Image, Text } from 'react-native'
import { Link } from 'react-router-native'
import { bottomNavigationStyles } from '../../Style/styles'
import shipmentIcon from '../../assets/image/boxes-icon.png'
import scanIcon from '../../assets/image/barcode-scan-icon.png'
import walletIcon from '../../assets/image/wallet-icon.png'
import profileIcon from '../../assets/image/avatar-icon.png'

interface Props {

}

function BottomNavigation(props: Props) {
    const { } = props

    return (
        <View style={bottomNavigationStyles.bottomNavigation}>
            <Link to=""><View style={bottomNavigationStyles.navItem}>
                <Image source={shipmentIcon} style={bottomNavigationStyles.icon} />
                <Text style={[bottomNavigationStyles.activeText]}>Shipment</Text></View>
            </Link>
            <Link to=""><View>
                <Image source={scanIcon} style={bottomNavigationStyles.icon}/>
                <Text style={bottomNavigationStyles.text}>Scan</Text></View>
            </Link>
            <Link to=""><View>
                <Image source={walletIcon} style={bottomNavigationStyles.icon} />
                <Text style={bottomNavigationStyles.text}>Wallet</Text></View>
            </Link>
            <Link to=""><View>
                <Image source={profileIcon} style={bottomNavigationStyles.icon} />
                <Text style={bottomNavigationStyles.text}>Profile</Text></View>
            </Link>



        </View>
    )
}

export default BottomNavigation 

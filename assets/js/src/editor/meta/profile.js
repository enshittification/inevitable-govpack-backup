// Using ESNext syntax
//import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
import { registerPlugin } from '@wordpress/plugins';
import { more } from '@wordpress/icons';

import { TextControl, PanelRow, SelectControl, Spinner } from "@wordpress/components";

import {GovPackSidebarPanel} from "./../components/sidebar-panel"
 
import { compose } from "@wordpress/compose";
import { withSelect, withDispatch, select } from "@wordpress/data";

import {default as prefixes} from "./../../../../json/prefix.json"
import {default as titles} from "./../../../../json/title.json"

function withPanel(component) {

    return compose([ 
        withSelect( ( select ) => {		
            return {
                meta: select( 'core/editor' ).getEditedPostAttribute( 'meta' ),
                type: select( 'core/editor' ).getCurrentPostType(),
            };
        }),
        withDispatch( ( dispatch ) => {
            return {
                setPostMeta( newMeta ) {
                    console.log("setPostMeta", newMeta)
                    dispatch( 'core/editor' ).editPost( { meta: newMeta } );
                },
                setTerm(taxonomy, term ) {

                    const { getTaxonomy } = select( 'core' );
                    const _taxonomy = getTaxonomy(taxonomy)

                    dispatch( 'core/editor' ).editPost( { [ _taxonomy.rest_base ]: term } );
                }

            };
        } ) 
    ])(component)
}

const AboutPanel = (props) => {

    let { setPostMeta } = props

    return (
        <GovPackSidebarPanel 
            title="About"
            name="gov-profile-about"
        >
            <PanelRow>
               <PanelSelectControl options = {Object.keys(prefixes).map( (key) => {
                   return {
                    value : key,
                    label : prefixes[key]
                   }
               } )} label = "Prefix" meta_key="prefix" onChange={setPostMeta} />
            </PanelRow>

            <PanelRow>
                <PanelTextControl label = "First Name" meta_key="first_name" onChange={setPostMeta} />
            </PanelRow>

            <PanelRow>
                <PanelTextControl label = "Last Name" meta_key="last_name" onChange={setPostMeta} />
            </PanelRow>

        </GovPackSidebarPanel>
    )
}

const PanelTextControl = (props) => {
    return (
        <TextControl
            label = {props.label}
            value={ props.meta?.[props.meta_key] ?? "" }
            onChange={ ( value ) => {
                console.log( value, props, { [props.meta_key]: value } )
                props.onChange( { [props.meta_key]: value } )
             } }
        />
    )
}

const PanelSelectControl = (props) => {
    return (
        <SelectControl
            label = {props.label}
            value={ props.meta?.[props.meta_key] ?? "" }
            onChange={ ( value ) => {
                props.onChange( { [props.meta_key]: value } )
             } }
            options={ props.options }
        />
    )
}

const RawPanelTaxonomyControl = (props) => {

    console.log("Render Taxonomy", props)

    if ( null === props.terms ) {
        return <Spinner />
    }

    const options = props.terms.map( ( term ) => {
        return {
            label: term.name,
            value: term.id
        }
    });

    
    return (
        <SelectControl
            label = {props.label}
            onChange={ ( value ) => {
               props.onChange(props.taxonomy, value)
            } }
            options={ options }
            value = { props.post_terms ?? "" }
        />
    )
}

const PanelTaxonomyControl = compose(

    withSelect( ( select, ownProps ) => {

        const { 
            getEntityRecords,
            getTaxonomy 
        } = select( 'core' );

        const { 
            getEditedPostAttribute 
        } = select('core/editor');

        const _taxonomy = getTaxonomy( ownProps.taxonomy );
        
        return {
            terms: getEntityRecords( 'taxonomy', ownProps.taxonomy, { per_page: 100 } ),
            post_terms: _taxonomy ? getEditedPostAttribute( _taxonomy.rest_base ) : []
        };
    } )

)( RawPanelTaxonomyControl );

const OfficePanel = (props) => {

    let { setPostMeta } = props

    return (
        <GovPackSidebarPanel 
            title="Office"
            name="gov-profile-office"
        >
        
            <PanelRow>
                <PanelTextControl meta={props.meta} label= "Address" meta_key="main_office_address" onChange={setPostMeta}/>
            </PanelRow>

            <PanelRow>
                <PanelTextControl meta={props.meta} label = "City" meta_key="main_office_city" onChange={setPostMeta}/>
            </PanelRow>

            <PanelRow>
                <PanelTextControl meta={props.meta} label = "State" meta_key="main_office_state" onChange={setPostMeta}/>
            </PanelRow>

            <PanelRow>
                <PanelTextControl meta={props.meta} label = "Zip" meta_key="main_office_zip" onChange={setPostMeta}/>
            </PanelRow>

        </GovPackSidebarPanel>
    )
}

const SecondaryOfficePanel = (props) => {

    let { setPostMeta } = props

    return (
        <GovPackSidebarPanel 
            title="Secondary Office"
            name="gov-profile-secondary-office"
        >
        
            <PanelRow>
                <PanelTextControl meta={props.meta} label= "Address" meta_key="secondary_office_address" onChange={setPostMeta}/>
            </PanelRow>

            <PanelRow>
                <PanelTextControl meta={props.meta} label = "City" meta_key="secondary_office_city" onChange={setPostMeta}/>
            </PanelRow>

            <PanelRow>
                <PanelTextControl meta={props.meta} label = "State" meta_key="secondary_office_state" onChange={setPostMeta}/>
            </PanelRow>

            <PanelRow>
                <PanelTextControl meta={props.meta} label = "Zip" meta_key="secondary_office_zip" onChange={setPostMeta}/>
            </PanelRow>

        </GovPackSidebarPanel>
    )
}

const PositionPanel = (props) => {

    let { setTerm, setPostMeta } = props

    return (
        <GovPackSidebarPanel 
            title="Position"
            name="gov-profile-position"
        >
        
          
            <PanelRow>
                <PanelSelectControl options = {Object.keys(titles).map( (key) => {
                   return {
                    value : key,
                    label : titles[key]
                   }
                    } )} label = "Title" meta_key="title" onChange={setPostMeta} />
                </PanelRow>

            <PanelRow>
                <PanelTaxonomyControl 
                    meta={props.meta} 
                    label = "Legislative Body" 
                    taxonomy="govpack_legislative_body" 
                    onChange={setTerm}
                />
            </PanelRow>

            <PanelRow>
                <PanelTaxonomyControl 
                    meta={props.meta} 
                    label = "State" 
                    taxonomy="govpack_state" 
                    onChange={setTerm}
                />
            </PanelRow>

           

            <PanelRow>
                <PanelSelectControl 
                    meta={props.meta} 
                    label = "County" 
                    taxonomy="govpack_county" 
                    onChange={setTerm}
                />
            </PanelRow>

        </GovPackSidebarPanel>
    )
}

const CommunicationsPanel = (props) => {

    let { setPostMeta } = props

    return (
        <GovPackSidebarPanel 
            title="Communications"
            name="gov-profile-communications"
        >
        
            <PanelRow>
                <PanelTextControl meta={props.meta} label= "Main Phone" meta_key="main_phone" onChange={setPostMeta}/>
            </PanelRow>

            <PanelRow>
                <PanelTextControl meta={props.meta} label= "Secondary Phone" meta_key="secondary_phone" onChange={setPostMeta}/>
            </PanelRow>

            <PanelRow>
                <PanelTextControl meta={props.meta} label= "Email" meta_key="text_email" onChange={setPostMeta}/>
            </PanelRow>

            <PanelRow>
                <PanelTextControl meta={props.meta} label= "Twitter" meta_key="twitter" onChange={setPostMeta}/>
            </PanelRow>

            <PanelRow>
                <PanelTextControl meta={props.meta} label= "Facebook" meta_key="facebook" onChange={setPostMeta}/>
            </PanelRow>

            <PanelRow>
                <PanelTextControl meta={props.meta} label= "LinkedIn" meta_key="linked" onChange={setPostMeta}/>
            </PanelRow>

            <PanelRow>
                <PanelTextControl meta={props.meta} label= "Instagram" meta_key="instagram" onChange={setPostMeta}/>
            </PanelRow>

            <PanelRow>
                <PanelTextControl meta={props.meta} label= "Campaign Website" meta_key="campaign_url" onChange={setPostMeta}/>
            </PanelRow>

            <PanelRow>
                <PanelTextControl meta={props.meta} label= "Legislative Website" meta_key="leg_url" onChange={setPostMeta}/>
            </PanelRow>

        </GovPackSidebarPanel>
    )
}


const ComposedAboutPanel = withPanel(AboutPanel)
const ComposedOfficePanel = withPanel(OfficePanel)
const ComposedSecondaryOfficePanel = withPanel(SecondaryOfficePanel)
const ComposedPositionPanel = withPanel(PositionPanel)
const ComposedCommunicationsPanel = withPanel(CommunicationsPanel)




const GovPackProfileSidebar = () => (
    <>
        <ComposedAboutPanel />
        <ComposedOfficePanel />
        <ComposedSecondaryOfficePanel />
        <ComposedPositionPanel />
        <ComposedCommunicationsPanel />
    </>

);
 
registerPlugin( 'profile-meta', {
    icon: more,
    render: GovPackProfileSidebar,
} );

console.log("profile-meta loaded")